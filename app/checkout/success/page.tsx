"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { formatPrice } from "@/lib/products";
import { clearCart } from "@/lib/store";

type Result = { orderName: string; orderId: string; totalAmount: number; method: string };

function Success() {
  const params = useSearchParams();
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState("");
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    const paymentKey = params.get("paymentKey");
    const orderId = params.get("orderId");
    const amount = Number(params.get("amount"));
    const pending = JSON.parse(sessionStorage.getItem("shop:pending-order") ?? "null");

    (async () => {
      // 결제 전에 저장한 주문 정보와 다르면 승인하지 않는다.
      if (!paymentKey || !orderId || !pending || pending.orderId !== orderId || pending.amount !== amount) {
        setError("주문 정보가 일치하지 않아 결제를 승인하지 않았습니다.");
        return;
      }
      const res = await fetch("/api/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentKey, orderId, amount }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message ?? "결제 승인에 실패했습니다.");
        return;
      }
      sessionStorage.removeItem("shop:pending-order");
      clearCart();
      setResult({
        orderName: data.orderName,
        orderId: data.orderId,
        totalAmount: data.totalAmount,
        method: data.method,
      });
    })().catch(() => setError("결제 승인 중 오류가 발생했습니다."));
  }, [params]);

  if (error) {
    return (
      <div className="py-16 text-center text-sm">
        <h1 className="mb-2 text-xl font-bold">결제를 완료하지 못했습니다</h1>
        <p role="alert" className="text-red-600">
          {error}
        </p>
        <Link href="/cart" className="mt-4 inline-block underline">
          장바구니로 돌아가기
        </Link>
      </div>
    );
  }

  if (!result) return <p className="py-16 text-center text-sm">결제 승인 중입니다...</p>;

  return (
    <div className="mx-auto max-w-md py-12 text-center">
      <h1 className="mb-6 text-xl font-bold">결제가 완료되었습니다</h1>
      <dl className="space-y-2 text-left text-sm">
        <div className="flex justify-between">
          <dt className="text-neutral-500">주문 상품</dt>
          <dd>{result.orderName}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-neutral-500">결제 금액</dt>
          <dd>{formatPrice(result.totalAmount)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-neutral-500">결제 수단</dt>
          <dd>{result.method}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="shrink-0 text-neutral-500">주문번호</dt>
          <dd className="break-all">{result.orderId}</dd>
        </div>
      </dl>
      <Link href="/" className="mt-8 inline-block bg-black px-6 py-2 text-sm font-semibold text-white">
        홈으로
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<p className="py-16 text-center text-sm">불러오는 중...</p>}>
      <Success />
    </Suspense>
  );
}
