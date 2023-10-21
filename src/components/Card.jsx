import React from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[900px] h-[600px] text-center smsk mt-5  rounded-xl max-md:w-[350px] max-md:h-[200px]">
        <div className="flex items-center justify-end p-2">
        <button onClick={() => navigate("/")} className="border border-black rounded-lg p-1">exit</button>
        </div>
        <h2 className="text-font">Корзина</h2>
        <p className="text-font2">Ваша корзина пуста</p>
      </div>
    </div>
  );
};

export default Card;
