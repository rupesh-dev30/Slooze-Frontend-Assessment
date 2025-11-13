import StatCard from "./StatCard";

const SmallStatsRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      <StatCard title="Total Earning" value="$112,893.00" />
      <StatCard title="Views" value="+112,893" />
      <StatCard title="Total Sales" value="+112,893" />
      <StatCard title="Subscriptions" value="+112,893" />
    </div>
  );
};

export default SmallStatsRow;
