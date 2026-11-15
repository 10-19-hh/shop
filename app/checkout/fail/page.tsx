"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function Fail() {
  const params = useSearchParams();
  return (
    <div className="py-16 text-center text-sm">
      <h1 className="mb-2 text-xl font-bold">결제에 실패했습니다</h1>
      <p className="text-neutral-600">{params.get("message") ?? "알 수 없는 오류가 발생했습니다."}</p>
      <p className="mt-1 text-xs text-neutral-400">오류 코드: {params.get("code") ?? "-"}</p>
      <Link href="/cart" className="mt-6 inline-block underline">
        장바구니로 돌아가기
      </Link>
    </div>
  );
}

export default function FailPage() {
  return (
    <Suspense fallback={null}>
      <Fail />
    </Suspense>
  );
}
