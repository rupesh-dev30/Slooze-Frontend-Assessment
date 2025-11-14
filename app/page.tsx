import { getCurrentUser } from "@/lib/actions/user.action";
import HomeContent, { CurrentUser } from "@/components/HomeContent";

export default async function HomePage() {
  const user: CurrentUser | null = await getCurrentUser();
  return <HomeContent user={user} />;
}
