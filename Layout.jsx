import { Outlet } from "react-router-dom";
import Footer from "./src/components/Footer/Footer";
import Header from "./src/components/Header/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
