import { getProducts } from "@/lib/actions/product.action";
import ProductPage from "./ProductPage";


export default async function ProductDashboard() {
  const res = await getProducts({ limit: 100 });
  const products = res.success ? (res.data ?? []) : [];

  return <ProductPage products={products} />;
}
