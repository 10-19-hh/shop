import { getProducts } from "@/lib/data";
import WishlistView from "./WishlistView";

export default async function Page() {
  return <WishlistView products={await getProducts()} />;
}
