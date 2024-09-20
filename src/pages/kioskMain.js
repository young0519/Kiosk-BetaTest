import { useNavigate } from "react-router-dom";
import * as m from "../styles/mainPageStyle";
import LanguageSelect from "../components/languageSelect";
import wow_img from "../assets/imgs/wowImg.png"
import axios from "axios";


function KioskMain() {
  const navigate = useNavigate();
  const moveToMenu = () => {
    axios.get('/kiosk/items')
    .then(response => {
      console.log(response.data);

      // response 데이터의 topCategories를 localStorage에 저장
      localStorage.setItem('menuData', JSON.stringify(response.data));
      
      navigate("/menu");
    })
    .catch(error => {
      console.error(error);
    });
  };
  
  return (
    <m.KioskMainContainer>
      <LanguageSelect/>
      <img src={wow_img}/>
      <h1>HOIKS</h1>
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