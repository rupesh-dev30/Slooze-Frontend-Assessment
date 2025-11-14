import { getProducts } from "@/lib/actions/product.action";
import ProductPage from "./ProductPage";
import { getCurrentUser } from "@/lib/actions/user.action";

export default async function ProductDashboard() {
  const user = await getCurrentUser();
  const res = await getProducts({ limit: 100 });
  const products = res.success ? res.data ?? [] : [];

  if (!user) {
    return <div className="p-6 text-red-500 text-lg">Unauthorized</div>;
  }

  return <ProductPage products={products} role={user.role} userId={user.id} />;
}
