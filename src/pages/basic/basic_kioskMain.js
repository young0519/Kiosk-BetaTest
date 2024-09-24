import { useNavigate } from "react-router-dom";
import * as m from "../../styles/basic/mainPageBasicStyle";
import LanguageSelect from "../../components/languageSelect";
import axios from "axios";
import ScreenSelect from "../../components/screenSelect";
import reTUroBAR from "../../assets/imgs/reTUroBAR_썸네일.jpeg"


function KioskMain() {
  const navigate = useNavigate();
  const moveToMenu = () => {
    navigate("/basic/menu");
    
    axios.get('/kiosk/items')
    .then(response => {
      console.log(response.data);

      // response 데이터의 topCategories를 localStorage에 저장
      localStorage.setItem('menuData', JSON.stringify(response.data));
      
    })
    .catch(error => {
      console.error(error);
    });
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