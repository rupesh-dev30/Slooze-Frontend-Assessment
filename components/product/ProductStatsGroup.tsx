import ProductStatsCard from "./ProductStatsCard";

const ProductStatsGroup = () => {
  return (
    <div className="space-y-6">
      {[
        { title: "Total Views", color: "#f59e0b" },
        // { title: "Total Sales", color: "#8b5cf6" },
        // { title: "Total Earning", color: "#10b981" },
      ].map((c, i) => (
        <ProductStatsCard key={i} title={c.title} color={c.color} />
      ))}
    </div>
  );
}

export default ProductStatsGroup;
