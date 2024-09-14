import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { getSession } from "@/utils/actions";
import { SessionData } from "@/utils/lib";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
}

const layout: React.FC<ChildrenProps> = async ({ children }) => {
  // const serializedPath = path?.toString() || "/";
  const session: SessionData = await getSession();

  console.log("layout session", session);
  const plainSession = {
    userId: session?.userId,
    userName: session?.username,
    isPro: session?.isPro,
    isBlocked: session?.isBlocked,
    isLoggedIn: session?.isLoggedIn,
  };
  return (
    <main>
      <Navbar session={plainSession} />
      <section className="dashboard-layout">{children}</section>
      <Footer />
    </main>
  );
};

export default layout;
