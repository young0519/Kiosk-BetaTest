import { useNavigate } from "react-router-dom";
import * as m from "../../styles/basic/mainPageBasicStyle";
import axios from "axios";
import ScreenSelect from "../../components/screenSelect";
import reTUroBAR from "../../assets/imgs/reTUroBAR_썸네일.jpeg"


function KioskMain() {
  const navigate = useNavigate();
  const moveToMenu = () => {
    navigate("/basic/menu");
  };
  
  return (
    <m.KioskMainContainer>
      <m.MenuHeader>
        <ScreenSelect/>
      </m.MenuHeader>
      <img src={reTUroBAR}/>
      <m.startBtnContainer >
        <button 
          onClick={moveToMenu}
        >매장 식사</button>
        <button 
          onClick={moveToMenu}
        >포장 주문</button>
      </m.startBtnContainer>
    </m.KioskMainContainer>
  )
}
export default KioskMain;  