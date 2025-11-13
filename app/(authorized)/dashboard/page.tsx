import OverviewChart from "@/components/dashboard/OverviewChart";
import RecentSales from "@/components/dashboard/RecentSales";
import Sidebar from "@/components/dashboard/Sidebar";
import SmallStatsRow from "@/components/dashboard/SmallStatsRow";
import StatsSection2 from "@/components/dashboard/StatSection2";
import StatsSection from "@/components/dashboard/StatsSection";
import TopNav from "@/components/dashboard/TopNav";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-[#E9EEF4] dark:bg-black text-gray-900 dark:text-white">
      <div className="flex">
        <Sidebar />

        <div className="lg:pl-78 flex-1 p-6">
          <TopNav />

          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold">Dashboard</h1>

              <button className="px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-700 transition">
                + Add New Product
              </button>
            </div>

            <SmallStatsRow />

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <OverviewChart />
              </div>

              <RecentSales />
            </div>
          </div>

          <div className="mt-8">
            <StatsSection />
            <StatsSection2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
