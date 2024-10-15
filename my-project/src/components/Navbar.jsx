import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ darkMode, toggleMode }) => {
  return (
    <div className={`h-16 flex justify-between ${darkMode ? 'bg-purple-800' : 'bg-purple-600'}`}>
      <div className="flex gap-10 sm:gap-20 mx-8">
        <h1 className="text-white text-3xl py-3 font-bold">TextUtils</h1>
        <NavLink to="/" className={({ isActive }) => 
    `text-white py-5 font-semibold ${isActive ? "text-purple-950" : ""}`}>
          Home
        </NavLink>
        <NavLink to="/about" className={({isActive})=>
          `text-white py-5 font-semibold ${isActive? "text-purple-950": ""}`}>
          About
        </NavLink>
      </div>
      <div className="mx-10 lg:mx-3 py-5">
        <input
          onChange={toggleMode}
          type="checkbox"
          className="toggle"
          checked={darkMode}
        />
      </div>
    </div>
  );
};

export default Navbar;


