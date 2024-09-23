import { useNavigate } from "react-router-dom";
import * as m from "../styles/basic/mainPageBasicStyle";
import LanguageSelect from "../components/languageSelect";
import wow_img from "../assets/imgs/wowImg.png"
import axios from "axios";
import ScreenSelect from "../components/screenSelect";


function KioskStart() {
  const navigate = useNavigate();
  const moveToMain = () => {
    // additionalBaseURL을 사용하여 요청
    axios.get(`${axios.defaults.additionalBaseURL}/inference`)
    .then(response => {
      console.log(response.data);
      if (response.data.position === 'NORM' && response.data.age >= '50') {
        navigate("/text");
      }
      else if (response.data.position === 'NORM') {
        navigate("/basic");
      }
      else if (response.data.position === 'LOW') {
        navigate("/low");
      }
      else {
        navigate("/basic");
      }
    })
    .catch(error => {
      console.error(error);
    });
  };
  
  return (
    <m.KioskStartContainer>
      <m.MenuHeader>
        <ScreenSelect/>
        <LanguageSelect/>
      </m.MenuHeader>
      <p>
        저희 매장의 키오스크는 <br/>
        <span>카메라 AI</span>를 활용하여 <br/>
        <span>나이대와 성별</span>을 추론하여 <br/>
        메뉴 추천 및 다양한 모드를 <br/>
        제공하고 있어요
      </p>
      <button 
        onClick={moveToMain}
      >주문하기</button>
    </m.KioskStartContainer>
  )
}
export default KioskStart;  