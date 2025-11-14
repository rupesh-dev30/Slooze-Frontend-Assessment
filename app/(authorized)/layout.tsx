import Sidebar from "@/components/dashboard/Sidebar";
import TopNav from "@/components/dashboard/TopNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#E9EEF4] dark:bg-black text-gray-900 dark:text-white">
      <div className="flex">
        <Sidebar />

        <div className="lg:pl-78 flex-1 p-6">
          <TopNav />

          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
