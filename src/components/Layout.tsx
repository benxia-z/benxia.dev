import { useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <>
      <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
