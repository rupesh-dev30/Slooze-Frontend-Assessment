"use client";

import { ProductDocument } from "@/lib/shared.types";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteProduct, updateProduct } from "@/lib/actions/product.action";

export default function ProductTable({
  products,
  role,
  userId,
}: {
  products: ProductDocument[];
  role: string;
  userId: string;
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    startTransition(async () => {
      const res = await deleteProduct(id);
      if (res.success) router.refresh();
      else alert(res.message || "Failed to delete product");
    });
  };

  const toggleStatus = (p: ProductDocument) => {
    const newStatus = p.status === "published" ? "draft" : "published";

    if (!confirm(`Are you sure you want to mark this product as ${newStatus}?`))
      return;

    startTransition(async () => {
      const res = await updateProduct(p._id, { status: newStatus });
      if (res.success) router.refresh();
      else alert(res.message || "Failed to change status");
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 rounded-xl">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="py-3 text-left">Product Name</th>
            <th className="py-3">Views</th>
            <th className="py-3">Price</th>
            <th className="py-3">Revenue</th>
            <th className="py-3">Status</th>
            <th className="py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => {
            const canModify =
              role === "manager" ||
              (role === "store_keeper" && p.user === userId);

            return (
              <tr
                key={p._id}
                className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <td className="py-4">{p.name}</td>
                <td className="text-center">{p.views}</td>
                <td className="text-center">₹{p.price}</td>
                <td className="text-center">₹{p.revenue}</td>

                <td className="text-center">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      p.status === "published"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>

                <td className="py-4 flex gap-2 justify-center">
                  <button
                    onClick={() => canModify && toggleStatus(p)}
                    disabled={!canModify}
                    className={`px-3 py-1 text-xs rounded transition ${
                      canModify
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-blue-300/50 text-white/50 cursor-not-allowed"
                    }`}
                  >
                    {p.status === "published" ? "Unpublish" : "Publish"}
                  </button>

                  <button
                    onClick={() =>
                      canModify && router.push(`/product/edit/${p._id}`)
                    }
                    disabled={!canModify}
                    className={`px-3 py-1 text-xs rounded transition ${
                      canModify
                        ? "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                        : "bg-gray-300/40 dark:bg-gray-700/40 text-white/40 cursor-not-allowed"
                    }`}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => canModify && handleDelete(p._id)}
                    disabled={!canModify || isPending}
                    className={`px-3 py-1 text-xs rounded transition ${
                      canModify
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-red-400/40 text-white/40 cursor-not-allowed"
                    }`}
                  >
                    {isPending ? "..." : "Delete"}
                  </button>
                </td>
              </tr>
            );
          })}

          {products.length === 0 && (
            <tr>
              <td
                colSpan={6}
                className="py-8 text-center text-gray-500 dark:text-gray-400"
              >
                No products found for this tab.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
