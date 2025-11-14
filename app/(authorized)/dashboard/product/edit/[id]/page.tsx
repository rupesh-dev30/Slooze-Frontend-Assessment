import EditProductForm from "@/components/product/EditProductForm";
import { getProductById } from "@/lib/actions/product.action";

export default async function EditProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await props.params;

  const res = await getProductById(id);

  if (!res.success || !res.data) {
    return <div className="p-6 text-red-500 text-lg">Product not found</div>;
  }

  return <EditProductForm product={res.data} />;
}
