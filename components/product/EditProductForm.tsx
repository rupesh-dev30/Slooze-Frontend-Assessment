"use client";

import { updateProduct } from "@/lib/actions/product.action";
import { ProductDocument } from "@/lib/shared.types";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function EditProductForm({ product }: { product: ProductDocument }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [status, setStatus] = useState(product.status);

  const handleSave = () => {
    startTransition(async () => {
      const res = await updateProduct(product._id, {
        name,
        price,
        status,
      });

      if (res.success) {
        router.push("/dashboard/product");
      } else {
        alert("Update failed");
      }
    });
  };

  return (
    <section className="p-6 bg-white dark:bg-gray-900 rounded-lg">
      <h1 className="text-xl font-semibold mb-4">Edit Product</h1>

      <div className="space-y-4">
        <div>
          <label>Name</label>
          <input
            className="w-full mt-1 p-2 border rounded bg-gray-50 dark:bg-gray-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Price</label>
          <input
            className="w-full mt-1 p-2 border rounded bg-gray-50 dark:bg-gray-800"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <div>
          <label>Status</label>
          <select
            className="w-full mt-1 p-2 border rounded bg-gray-50 dark:bg-gray-800"
            value={status}
            onChange={(e) => setStatus(e.target.value as "published" | "draft")}
          >
            <option value="published">Published</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <button
          disabled={isPending}
          onClick={handleSave}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
        >
          {isPending ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </section>
  );
}
