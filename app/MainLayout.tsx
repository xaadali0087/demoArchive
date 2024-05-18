"use client";
import { FC, ReactNode } from "react";
import AppNav from "./components/AppNav/AppNav";
import Footer from "./components/Footer/Footer";

interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <AppNav />
      {children}
      <Footer />
    </>
  );
};
export default MainLayout;
