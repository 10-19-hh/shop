// 결제 승인은 시크릿 키가 필요하므로 서버에서만 호출한다.
export async function POST(request: Request) {
  const secretKey = process.env.TOSS_SECRET_KEY;
  if (!secretKey) {
    return Response.json({ message: "TOSS_SECRET_KEY가 설정되지 않았습니다." }, { status: 500 });
  }

  const { paymentKey, orderId, amount } = await request.json();
  if (!paymentKey || !orderId || typeof amount !== "number") {
    return Response.json({ message: "잘못된 요청입니다." }, { status: 400 });
  }

  const res = await fetch("https://api.tosspayments.com/v1/payments/confirm", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${secretKey}:`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ paymentKey, orderId, amount }),
  });

  const data = await res.json();
  return Response.json(data, { status: res.status });
}
