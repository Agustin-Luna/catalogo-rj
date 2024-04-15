import React, { useState } from "react";
import Icon from '../../assets/iconoEstiloPast.png'
import ProductosDropdown from "./Dropdow/Dropdown.jsx";




const Navbar = () => {
  return (
    <div className="bg-pink-600 flex justify-between items-center">
      <div>
        <img src={Icon} alt="" className="pl-9" />
      </div>

      <div>
        <ProductosDropdown className=""/>
      </div>
    </div>
  )
}

export default Navbar