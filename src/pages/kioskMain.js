import { useNavigate } from "react-router-dom";

function KioskMain() {
  const navigate = useNavigate();
  const moveToMenu = () => navigate("/menu");
  
  return (
    <div className="relative h-screen w-screen">
      <div className="flex h-[300px] w-full bg-red-300 justify-around items-center absolute bottom-[50px]">
        <button 
          className="w-[477px] h-[274px] text-[60px] rounded-[30px] bg-blue1 text-white "
          onClick={moveToMenu}
        >매장 식사</button>
        <button 
          className="w-[477px] h-[274px] text-[60px] rounded-[30px] bg-blue1 text-white"
          onClick={moveToMenu}
        >포장 주문</button>
      </div>
    </div>
  )
}
export default KioskMain;  