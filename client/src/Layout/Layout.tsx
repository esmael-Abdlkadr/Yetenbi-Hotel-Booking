import Header from "../Components/Header.tsx";
import Hero from "../Components/Hero.tsx";
import FooterComp from "../Components/Footer.tsx";
import React from "react";
interface props {
  children: React.ReactNode;
}
function Layout({ children }: props) {
  return (
    <div className={"flex flex-col min-h-full"}>
      <Header />
      <Hero />
      <div className={"container mx-auto py-10 flex-1"}>{children}</div>
      <FooterComp />
    </div>
  );
}

export default Layout;
