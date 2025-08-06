import { navLinksSample } from "@/constants";
import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header links={navLinksSample}/>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
