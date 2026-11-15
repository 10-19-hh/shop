import { getProducts } from "@/lib/data";
import CheckoutView from "./CheckoutView";

export default async function Page() {
  return <CheckoutView products={await getProducts()} />;
}
