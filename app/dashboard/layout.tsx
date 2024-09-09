import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
}

const layout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <main>
      <Navbar />
      <section className="dashboard-layout">{children}</section>
      <Footer />
    </main>
  );
};

export default layout;
