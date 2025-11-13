import { Square } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
}

const StatCard = ({ title, value }: StatCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {title}
        </p>

        <Square size={18} className="text-gray-400" />
      </div>

      <h2 className="mt-3 text-2xl font-semibold text-gray-900 dark:text-white">
        {value}
      </h2>

      <p className="mt-1 text-xs text-gray-500 flex items-center gap-1">
        trend title
        <span className="text-green-600 font-semibold">▲ 70.5%</span>
      </p>
    </div>
  );
};

export default StatCard;
