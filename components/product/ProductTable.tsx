"use client";

import { ProductDocument } from "@/lib/shared.types";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/lib/actions/product.action";

export default function ProductTable({
  products,
}: {
  products: ProductDocument[];
}) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    startTransition(async () => {
      const res = await deleteProduct(id);

      if (res.success) {
        router.refresh(); // Refresh page and re-fetch data
      } else {
        alert("Failed to delete product");
      }
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
            <th className="py-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr
              key={p._id}
              className="border-b border-gray-100 dark:border-gray-700"
            >
              <td className="py-4">{p.name}</td>
              <td className="text-center">{p.views}</td>
              <td className="text-center">₹{p.price}</td>
              <td className="text-center">₹{p.revenue}</td>

              <td className="py-4 flex gap-2 justify-center">
                {/* EDIT BUTTON */}
                <button
                  onClick={() =>
                    router.push(`/dashboard/product/edit/${p._id}`)
                  }
                  className="px-3 py-1 text-xs bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                >
                  Edit
                </button>

                {/* DELETE BUTTON */}
                <button
                  onClick={() => handleDelete(p._id)}
                  disabled={isPending}
                  className="px-3 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
                >
                  {isPending ? "..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}

          {products.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="py-8 text-center text-gray-500 dark:text-gray-400"
              >
                No products found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
