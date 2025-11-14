import Sidebar from "@/components/dashboard/Sidebar";
import TopNav from "@/components/dashboard/TopNav";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = (await cookies());
  const token = cookieStore.get("token")?.value;

  let role: string = "guest";

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
        role: string;
      };
      role = decoded.role;
    } catch {}
  }

  return (
    <div className="min-h-screen bg-[#E9EEF4] dark:bg-black text-gray-900 dark:text-white">
      <div className="flex">
        <Sidebar role={role} />

        <div className="lg:pl-78 flex-1 p-6">
          <TopNav />

          {children}
        </div>
      </div>
    </div>
  );
}
