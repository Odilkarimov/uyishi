import { useNavigate } from "react-router-dom";

const Comp = () => {
    const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[900px] h-[600px] text-center smsk mt-5  rounded-xl max-md:w-[350px] max-md:h-[550px]">
        <div className="flex items-center justify-end p-2">
          <button
            onClick={() => navigate("/")}
            className="border border-black rounded-lg p-1"
          >
            exit
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-[50px] mt-[100px]">
          <h2 className="font-bold text-[34px]">O компании</h2>
          <h2 className="font-bold text-[34px]">Доставка и оплата</h2>
          <h2 className="font-bold text-[34px]">Контакты</h2>
        </div>
      </div>
    </div>
  );
};

export default Comp;
