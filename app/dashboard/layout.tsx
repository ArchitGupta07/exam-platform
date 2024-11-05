"use client";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { getSession } from "@/utils/actions";
import { SessionData } from "@/utils/lib";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

interface ChildrenProps {
  children: ReactNode;
}

const layout: React.FC<ChildrenProps> = ({ children }) => {
  // const serializedPath = path?.toString() || "/";
  // const session: SessionData = await getSession();
  const [session, setSession] = useState<SessionData | null>(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getSession();
      const plainSession = {
        userId: session?.userId || "", // default to empty string
        userName: session?.userName || "", // default to empty string
        isPro: session?.isPro || false, // default to false
        isBlocked: session?.isBlocked || false, // default to false
        isLoggedIn: session?.isLoggedIn || false, // default to false
      };
      setSession(plainSession);
    };

    fetchSession();
  }, []);

  console.log("layout session", session);

  const pathname = usePathname();

  const safeSession: SessionData = session || {
    userId: "",
    userName: "",
    isPro: false,
    isBlocked: false,
    isLoggedIn: false,
  };

  const isExamPage = pathname.startsWith("/dashboard/exams/");
  return (
    <main>
      {/* <Navbar session={plainSession} /> */}
      {!isExamPage && <Navbar session={safeSession} />}
      <section className="dashboard-layout">{children}</section>
      {/* <Footer /> */}
      {!isExamPage && <Footer />}
    </main>
  );
};

export default layout;
