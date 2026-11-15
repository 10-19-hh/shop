"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { loadTossPayments, type TossPaymentsWidgets } from "@tosspayments/tosspayments-sdk";
import { BRAND } from "@/lib/config";
import { formatPrice, getProduct } from "@/lib/products";
import { useStore } from "@/lib/store";

const CLIENT_KEY = process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY ?? "";

export default function CheckoutPage() {
  const { cart } = useStore();
  const lines = cart.flatMap((c) => {
    const product = getProduct(c.productId);
    return product ? [{ ...c, product }] : [];
  });
  const total = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  const count = lines.reduce((n, l) => n + l.quantity, 0);
  const orderName =
    lines.length === 0
      ? ""
      : lines.length === 1
        ? lines[0].product.name
        : `${lines[0].product.name} 외 ${lines.length - 1}건`;

  const [widgets, setWidgets] = useState<TossPaymentsWidgets | null>(null);
  const [ready, setReady] = useState(false);
  const [runtimeError, setError] = useState("");
  const error = CLIENT_KEY ? runtimeError : "결제 클라이언트 키가 설정되지 않았습니다.";
  const rendered = useRef(false);

  // 1) 위젯 인스턴스 생성
  useEffect(() => {
    if (!CLIENT_KEY) return;
    let cancelled = false;
    loadTossPayments(CLIENT_KEY)
      .then((toss) => {
        if (!cancelled) setWidgets(toss.widgets({ customerKey: "ANONYMOUS" }));
      })
      .catch(() => setError("결제 모듈을 불러오지 못했습니다."));
    return () => {
      cancelled = true;
    };
  }, []);

  // 2) 금액 설정 후 결제수단·약관 렌더링 (한 번만)
  useEffect(() => {
    if (!widgets || total <= 0 || rendered.current) return;
    rendered.current = true;
    (async () => {
      try {
        await widgets.setAmount({ currency: "KRW", value: total });
        await Promise.all([
          widgets.renderPaymentMethods({ selector: "#payment-method", variantKey: "DEFAULT" }),
          widgets.renderAgreement({ selector: "#agreement", variantKey: "AGREEMENT" }),
        ]);
        setReady(true);
      } catch {
        setError("결제 화면을 표시하지 못했습니다.");
      }
    })();
  }, [widgets, total]);

  const pay = async () => {
    if (!widgets) return;
    const orderId = `${BRAND}-${crypto.randomUUID()}`.slice(0, 64);
    // 성공 페이지에서 금액 위변조를 확인하기 위해 주문 정보를 임시 저장
    sessionStorage.setItem("shop:pending-order", JSON.stringify({ orderId, amount: total }));
    try {
      await widgets.requestPayment({
        orderId,
        orderName,
        successUrl: `${window.location.origin}/checkout/success`,
        failUrl: `${window.location.origin}/checkout/fail`,
      });
    } catch (e) {
      // 사용자가 결제창을 닫은 경우 등
      const msg = e instanceof Error ? e.message : "";
      if (msg) setError(msg);
    }
  };

  if (lines.length === 0) {
    return (
      <div className="py-16 text-center text-sm text-neutral-500">
        <h1 className="mb-2 text-xl font-bold text-black">주문/결제</h1>
        <p>결제할 상품이 없습니다.</p>
        <Link href="/products" className="mt-3 inline-block underline">
          상품 둘러보기
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="mb-4 text-xl font-bold">주문/결제</h1>
      <p className="mb-4 bg-neutral-100 px-3 py-2 text-xs text-neutral-600">
        테스트 결제입니다. 실제로 금액이 청구되지 않습니다.
      </p>
      <ul className="mb-4 divide-y divide-neutral-200 border-y border-neutral-200 text-sm">
        {lines.map((l) => (
          <li key={`${l.productId}|${l.color}|${l.size}`} className="flex justify-between py-2">
            <span>
              {l.product.name} ({l.color}/{l.size}) × {l.quantity}
            </span>
            <span>{formatPrice(l.product.price * l.quantity)}</span>
          </li>
        ))}
      </ul>
      <div className="mb-2 flex justify-between text-lg font-bold">
        <span>총 {count}개</span>
        <span>{formatPrice(total)}</span>
      </div>

      <div id="payment-method" />
      <div id="agreement" />

      {error && (
        <p role="alert" className="my-2 text-sm text-red-600">
          {error}
        </p>
      )}
      <button
        type="button"
        onClick={pay}
        disabled={!ready}
        className="mt-4 w-full bg-black py-3 text-sm font-semibold text-white disabled:bg-neutral-300"
      >
        {formatPrice(total)} 결제하기
      </button>
    </div>
  );
}
