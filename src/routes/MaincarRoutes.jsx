import React from "react";
import { Routes, Route } from "react-router-dom";


import { MainTableCar } from "../componentsc/Maincar/MainTableCar";
import { Navbar } from "../componentsc/ui/Navbar";
import { SideBarr } from "../componentsc/ui/SideBarr";

export const MaincarRoutes = () => {
  return (
    <div className="flex "> 
      <SideBarr titulo={"Autos Colombia"} />
      <div className={`h-screen w-full`}>
        <Navbar titulo={"Autos colombia"} />
        <Routes>
          <Route path="Maincar" element={<MainTableCar />} />
          <Route path="" element={<MainTableCar />} />
        </Routes>
      </div>
    </div>
  );
};
