"use client";
import React, { useState, useMemo } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ProductTabs from "@/components/product/ProductTabs";
import ProductTable from "@/components/product/ProductTable";
import ProductStatsGroup from "@/components/product/ProductStatsGroup";
import Link from "next/link";
import { ProductDocument } from "@/lib/shared.types";

type ProductPageProps = {
  products: ProductDocument[];
  role: "manager" | "store_keeper" | string;
  userId: string;
};

export default function ProductPage({ products, role, userId }: ProductPageProps) {
  const [tab, setTab] = useState<"published" | "draft">("published");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => p.status === tab);
  }, [products, tab]);

  return (
    <div className="w-full py-8 min-h-screen bg-[#E9EEF4] dark:bg-black text-gray-900 dark:text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Product</h1>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href={"/product/add"}
            className="px-5 py-2.5 rounded-lg bg-violet-600 text-white font-medium shadow hover:bg-violet-700 transition"
          >
            + Add New Product
          </Link>
        </div>
      </div>

      <ProductTabs tab={tab} setTab={setTab} />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
        <div className="lg:col-span-3">
          <ProductTable products={filteredProducts} role={role} userId={userId} />
        </div>

        <div>
          <ProductStatsGroup />
        </div>
      </div>
    </div>
  );
}
