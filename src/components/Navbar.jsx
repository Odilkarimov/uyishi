import React from "react";
import Logo from "../assets/Logo.svg";
import User from "../assets/Vector.svg";
import Star from "../assets/Star.svg";
import Card from "../assets/Card.svg";
import Meny from "../assets/Meny.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full max-w-[1700px] mx-auto px-[10px] py-[15px] flex gap-4">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="max-w-[736px] max-h-[50px] flex-1">
          <input
            type="text"
            placeholder="Search for titles..."
            className="border rounded-lg py-2 px-3 w-full"
          />
        </div>
        <div className="flex items-center gap-10 w-full md:w-auto mt-3 md:mt-0 max-md:hidden">
          <div
            onClick={() => navigate("/call")}
            className="text-[22px] font-bold cursor-pointer"
          >
            Tel: +7 (4932) 11-22-33
          </div>
          <div
            onClick={() => navigate("/user")}
            className="flex text-[18px] font-semibold gap-4 cursor-pointer"
          >
            <img src={User} alt="User" className="" />
            Личный кабинет
          </div>
          <div
            onClick={() => navigate("comp")}
            className="flex gap-4 font-semibold"
          >
            <img src={Star} alt="" />
            Избранное
          </div>
          <div
            onClick={() => navigate("/card")}
            className="flex gap-4 font-semibold cursor-pointer"
          >
            <img src={Card} alt="" />
            Корзина
          </div>
        </div>
        <div>
          <img
            className="cursor-pointer max-md:w-10 max-md:h-10 hidden max-md:block"
            src={Meny}
            alt="meny"
          />
        </div>
      </div>
      <div className="w-full max-w-[1700px] mx-auto px-[10px] py-[15px] flex gap-[80px] max-md:hidden">
        <div className="flex gap-[50px]">
          <h3>Сигареты</h3>
          <h3>Одноразки</h3>
          <h3>Iqos, glo</h3>
          <h3>Pod-системы</h3>
          <h3>Жидкости</h3>
          <h3>Катриджи</h3>
          <h3>Кальянный табак</h3>
          <h3>Все для кальяна</h3>
          <h3>Аксессуары</h3>
          <h3>Одноразки</h3>
        </div>
        <div className="flex gap-2">
          <img src={Meny} alt="meny" />
          <h2>О компании</h2>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
