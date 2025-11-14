import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ProductStatsCard = ({
  title,
  color,
}: {
  title: string;
  color: string;
}) => {
  const chartData = [
    { name: "Nov 20", value: 200 },
    { name: "Nov 27", value: 350 },
    { name: "Dec 5", value: 500 },
    { name: "Dec 12", value: 450 },
    { name: "Dec 20", value: 600 },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-xl font-bold mt-1 mb-4">+112,893</p>

      <div style={{ height: 120 }} className="">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              className="dark:stroke-gray-700"
            />
            <XAxis
              dataKey="name"
              stroke="#666"
              className="dark:text-gray-300"
            />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                background: "#ffffff",
                border: "1px solid #ddd",
                color: "#111",
              }}
              wrapperStyle={{ color: "#000" }}
              labelStyle={{ color: "#000" }}
              itemStyle={{ color: "#000" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProductStatsCard;
