"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@/lib/actions/product.action";

export default function AddProductPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    category: "",
    description: "",
    tags: "",
    price: "",
    discount: "",
    discountCategory: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!form.name || !form.price) {
      alert("Please fill at least Product Name & Price");
      setLoading(false);
      return;
    }

    const payload = {
      name: form.name,
      category: form.category,
      description: form.description,
      tags: form.tags,
      price: Number(form.price),
      discount: Number(form.discount) || 0,
      discountCategory: form.discountCategory,
      image: "placeholder.jpg",
      thumbnail: "placeholder-thumb.jpg",
    };

    const res = await createProduct(payload);

    if (res.success) {
      router.push("/dashboard/product");
    } else {
      alert("Failed to create product");
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#E9EEF4] dark:bg-black text-gray-900 dark:text-white transition mt-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Add Product</h1>

        <Link
          href={"/dashboard/product/add"}
          className="px-5 py-2.5 rounded-lg bg-violet-600 text-white font-medium shadow hover:bg-violet-700 transition"
        >
          + Add New Product
        </Link>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center gap-4 mb-6">
        <h1 className="dark:text-white text-black text-xl font-bold">
          Add New Product
        </h1>
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              setForm({
                name: "",
                category: "",
                description: "",
                tags: "",
                price: "",
                discount: "",
                discountCategory: "",
              })
            }
            className="px-4 py-2 text-sm border border-red-400 text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition"
          >
            Discard Change
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 text-sm bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT FORM PANEL */}
        <div className="lg:col-span-2 space-y-8">
          {/* GENERAL INFORMATION */}
          <section className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">General Information</h2>

            <div className="space-y-5">
              {/* NAME */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Product Name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                />
              </div>

              {/* CATEGORY */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Product Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                >
                  <option value="">Select Category</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Clothes">Clothes</option>
                  <option value="Shoes">Shoes</option>
                </select>
              </div>

              {/* DESCRIPTION */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Description
                </label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Description"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                />
              </div>

              {/* TAGS */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Tag Keyword
                </label>
                <input
                  name="tags"
                  value={form.tags}
                  onChange={handleChange}
                  placeholder="Tag Keyword"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                />
              </div>
            </div>
          </section>

          {/* PRICING SECTION */}
          <section className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Pricing</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PRICE */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Price
                </label>
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Price"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                />
              </div>

              {/* DISCOUNT */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Discount
                </label>
                <input
                  name="discount"
                  value={form.discount}
                  onChange={handleChange}
                  placeholder="Discount"
                  className="w-full mt-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                />
              </div>

              {/* DISCOUNT CATEGORY */}
              <div>
                <label className="text-sm text-gray-600 dark:text-gray-400">
                  Discount Category
                </label>
                <select
                  name="discountCategory"
                  value={form.discountCategory}
                  onChange={handleChange}
                  className="w-full mt-1 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
                >
                  <option value="">Select Category</option>
                  <option value="Seasonal">Seasonal</option>
                  <option value="Festival">Festival</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Preview Product</h2>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl h-52 flex items-center justify-center text-gray-500 dark:text-gray-400">
              Drag and drop image here
            </div>
          </div>

          {/* THUMBNAIL IMAGE */}
          <div className="p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Thumbnail Product</h2>
            <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl h-52 flex items-center justify-center text-gray-500 dark:text-gray-400">
              Drag and drop here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
