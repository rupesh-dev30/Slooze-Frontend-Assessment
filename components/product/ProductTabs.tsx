interface ProductTabsProps {
  tab: "published" | "draft";
  setTab: (tab: "published" | "draft") => void;
}

const ProductTabs = ({ tab, setTab }: ProductTabsProps) => {
  return (
    <div className="flex items-center gap-10 border-b border-gray-300 dark:border-gray-800 pb-4">
      { (["published", "draft"] as const).map((t) => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className={`pb-2 text-sm capitalize transition tracking-wide ${
            tab === t
              ? "border-b-2 border-violet-600 text-black dark:text-white font-semibold"
              : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {t}
        </button>
      ))}

      <div className="ml-auto flex gap-3">
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Filter
        </button>
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          Download
        </button>
      </div>
    </div>
  );
};

export default ProductTabs;
