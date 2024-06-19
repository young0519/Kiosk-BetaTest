import { useNavigate } from "react-router-dom";
import * as m from "../styles/mainPageStyle";
import LanguageSelect from "../components/languageSelect";


function KioskMain() {
  const navigate = useNavigate();
  const moveToMenu = () => navigate("/menu");
  
  return (
    <m.KioskMainContainer>
      <LanguageSelect/>
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