import { NavBarComp } from "../component/Header.tsx";
import Hero from "../component/Hero.tsx";
import FooterComp from "../component/Footer.tsx";
import React from "react";
interface props {
  children: React.ReactNode;
}
function Layout({ children }: props) {
  return (
    <div className={"flex flex-col min-h-full"}>
      <NavBarComp />
      <Hero />
      <div className={"container mx-auto py-10 flex-1"}>{children}</div>
      <FooterComp />
    </div>
  );
}

export default Layout;
