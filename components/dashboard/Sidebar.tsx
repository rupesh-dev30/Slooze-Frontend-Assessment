"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  BarChart,
  FileChartColumnIncreasing,
  Home,
  LayoutDashboard,
  Settings,
  Store,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

const NavLink = ({
  href,
  label,
  icon,
  active,
  indent = false,
}: {
  href: string;
  label: string;
  active?: boolean;
  indent?: boolean;
  icon?: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
        indent ? "ml-6" : ""
      } ${
        active
          ? "bg-gray-200 dark:bg-gray-800 font-semibold text-black dark:text-white"
          : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
      }`}
    >
      {icon && <span className="text-gray-500">{icon}</span>}
      {label}
    </Link>
  );
};

const Sidebar = () => {
  const pathname = usePathname();

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
      {/* BRAND HEADER */}
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

      {/* MENU */}
      <nav className="space-y-2 text-sm">
        <NavLink
          href="/"
          icon={<Home size={20} />}
          label="Home"
          active={pathname === "/"}
        />

        <NavLink
          href="/dashboard"
          icon={<LayoutDashboard size={20} />}
          label="Dashboard"
          active={pathname.startsWith("/dashboard")}
        />

        {/* STORE */}
        <SectionHeader
          icon={<Store size={18} />}
          title="Store"
          open={openMenu.store}
          onToggle={() => toggle("store")}
        />

        {openMenu.store && (
          <>
            <NavLink
              href="/dashboard/product"
              label="Product"
              active={pathname === "/dashboard/product"}
              indent
            />
            <NavLink
              href="/dashboard/product/add"
              label="Add Product"
              active={pathname === "/dashboard/product/add"}
              indent
            />
          </>
        )}

        {/* ANALYTIC */}
        <SectionHeader
          icon={<BarChart size={18} />}
          title="Analytic"
          open={openMenu.analytic}
          onToggle={() => toggle("analytic")}
        />

        {openMenu.analytic && (
          <>
            <NavLink href="/dashboard/traffic" label="Traffic" indent />
            <NavLink href="/dashboard/earning" label="Earning" indent />
          </>
        )}

        {/* FINANCES */}
        <SectionHeader
          icon={<FileChartColumnIncreasing size={18} />}
          title="Finances"
          open={openMenu.finances}
          onToggle={() => toggle("finances")}
        />

        {openMenu.finances && (
          <>
            <NavLink href="/dashboard/payment" label="Payment" indent />
            <NavLink href="/dashboard/payout" label="Payout" indent />
          </>
        )}

        {/* ACCOUNT SETTINGS */}
        <SectionHeader
          icon={<Settings size={18} />}
          title="Account Setting"
          open={openMenu.account}
          onToggle={() => toggle("account")}
        />

        {openMenu.account && (
          <>
            <NavLink href="/dashboard/profile" label="My Profile" indent />
            <NavLink href="/dashboard/security" label="Security" indent />
          </>
        )}

        {/* HELP */}
        <SectionHeader
          icon={<Settings size={18} />}
          title="Help And Support"
          open={openMenu.help}
          onToggle={() => toggle("help")}
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
