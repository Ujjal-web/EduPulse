import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";

const MainLayouts = () => {
  return (
    <>
      {/* header */}
      <header>
        <Navbar/>
      </header>

      {/* main */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <footer>
        {/* footer box */}
      </footer>
    </>
  );
};

export default MainLayouts;
