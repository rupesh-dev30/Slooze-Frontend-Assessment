"use client";
import React, { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import ProductTabs from "@/components/product/ProductTabs";
import ProductTable from "@/components/product/ProductTable";
import ProductStatsGroup from "@/components/product/ProductStatsGroup";
import Link from "next/link";
import { ProductDocument } from "@/lib/shared.types";

export default function ProductPage({ products }: { products: ProductDocument[] }) {
  const [tab, setTab] = useState("published");

  return (
    <div className="w-full py-8 min-h-screen bg-[#E9EEF4]  dark:bg-black text-gray-900 dark:text-white">
      {/* HEADER BAR */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Product</h1>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href={"/dashboard/product/add"}
            className="px-5 py-2.5 rounded-lg bg-violet-600 text-white font-medium shadow hover:bg-violet-700 transition"
          >
            + Add New Product
          </Link>
        </div>
      </div>

      {/* TABS */}
      <ProductTabs tab={tab} setTab={setTab} />

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6">
        {/* TABLE */}
        <div className="lg:col-span-3">
          <ProductTable products={products} />
        </div>

        {/* RIGHT-SIDE STATS */}
        <div>
          <ProductStatsGroup />
        </div>
      </div>
    </div>
  );
}
