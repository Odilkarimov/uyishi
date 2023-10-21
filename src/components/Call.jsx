import { useNavigate } from "react-router-dom";

const Call = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-[900px] h-[600px] text-center smsk mt-5  rounded-xl max-md:w-[350px] max-md:h-[500px]">
        <div className="flex items-center justify-end p-2">
          <button
            onClick={() => navigate("/")}
            className="border border-black rounded-lg p-1"
          >
            exit
          </button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-font">Обратный звонок</h2>
          <p className="text-font2">
            Оставьте свои контакты и наш <br /> менеджер свяжется c вами
          </p>
          <input
            type="text"
            placeholder="Ваше имя"
            className="border rounded-lg py-2 px-3 w-[300px] mt-2 ml-auto]"
          />
          <input
            type="text"
            placeholder="Номер телефона"
            className="border rounded-lg py-2 px-3 w-[300px] mt-2 ml-auto]"
          />
          <buttonc className="btn-font">Оставить заявку</buttonc>
        </div>
      </div>
    </div>
  );
};

export default Call;
