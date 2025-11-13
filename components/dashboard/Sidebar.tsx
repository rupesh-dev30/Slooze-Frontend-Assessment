"use client";

import { useState } from "react";
import {
  BarChart,
  ChevronDown,
  FileChartColumnIncreasing,
  Home,
  LayoutDashboard,
  Settings,
  Store,
} from "lucide-react";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState({
    store: true,
    analytic: true,
    finances: true,
    account: true,
    help: true,
  });

  const toggle = (key: keyof typeof openMenu) => {
    setOpenMenu((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="fixed w-72 min-h-screen bg-[#E9EEF4] dark:bg-black border-r border-gray-100 dark:border-gray-800 p-4 hidden lg:block">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-9 h-9 rounded-full bg-purple-600 flex items-center justify-center text-white font-semibold">
          B
        </div>
        <div>
          <div className="font-semibold">Bitstore</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            Admin Panel
          </div>
        </div>
      </div>

      <nav className="space-y-1 text-sm">
        <div className="px-3 py-2 rounded-md bg-white dark:bg-gray-800 shadow-sm flex items-center gap-2 cursor-pointer">
          <Home size={20} className="text-gray-500" />
          <p className="font-medium text-black dark:text-gray-200">Home</p>
        </div>

        <div className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center gap-2 cursor-pointer shadow-sm bg-white dark:bg-gray-800">
          <LayoutDashboard size={20} className="text-gray-500" />
          <p className="font-medium text-gray-800 dark:text-gray-200">
            Dashboard
          </p>
        </div>

        <SectionHeader
          icon={<Store size={18} className="text-gray-600" />}
          title="Store"
          open={openMenu.store}
          onToggle={() => toggle("store")}
        />

        {openMenu.store && (
          <>
            <ActiveItem label="Product" />
            <NavItem label="Add Product" />
          </>
        )}

        <SectionHeader
          icon={<BarChart size={18} className="text-gray-600" />}
          title="Analytic"
          open={openMenu.analytic}
          onToggle={() => toggle("analytic")}
        />

        {openMenu.analytic && (
          <>
            <NavItem label="Traffic" />
            <NavItem label="Earning" />
          </>
        )}

        <SectionHeader
          icon={
            <FileChartColumnIncreasing size={18} className="text-gray-600" />
          }
          title="Finances"
          open={openMenu.finances}
          onToggle={() => toggle("finances")}
        />

        {openMenu.finances && (
          <>
            <NavItem label="Payment" />
            <NavItem label="Payout" />
          </>
        )}

        <SectionHeader
          icon={<Settings size={18} className="text-gray-600" />}
          title="Account Setting"
          open={openMenu.account}
          onToggle={() => toggle("account")}
        />

        {openMenu.account && (
          <>
            <NavItem label="My Profile" />
            <NavItem label="Security" />
          </>
        )}

        <SectionHeader
          icon={<Settings size={18} className="text-gray-600" />}
          title="Help And Support"
          open={openMenu.help}
          onToggle={() => toggle("help")}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;

const SectionHeader = ({
  icon,
  title,
  open,
  onToggle,
}: {
  icon: React.ReactNode;
  title: string;
  open: boolean;
  onToggle: () => void;
}) => (
  <div
    onClick={onToggle}
    className="mt-4 text-xs text-gray-500 uppercase flex items-center justify-between cursor-pointer"
  >
    <div className="flex items-center gap-2">
      {icon}
      <p className="font-semibold text-gray-600">{title}</p>
    </div>
    <ChevronDown
      size={18}
      className={`text-gray-500 transition-transform ${
        open ? "rotate-180" : "rotate-0"
      }`}
    />
  </div>
);

const NavItem = ({ label }: { label: string }) => (
  <div className="px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer ml-6">
    {label}
  </div>
);

const ActiveItem = ({ label }: { label: string }) => (
  <div className="px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-md ml-6 font-medium cursor-pointer">
    {label}
  </div>
);
