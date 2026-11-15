import { getProducts } from "@/lib/data";
import CartView from "./CartView";

export default async function Page() {
  return <CartView products={await getProducts()} />;
}
