import { useNavigate } from "react-router-dom";
import * as m from "../styles/basic/mainPageBasicStyle";
import LanguageSelect from "../components/languageSelect";
import wow_img from "../assets/imgs/wowImg.png";
import axios from "axios";
import ScreenSelect from "../components/screenSelect";
import { useState } from "react";

function KioskStart() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // 로딩 상태 관리

  const moveToMain = () => {
    setLoading(true); // 로딩 시작
    axios.get(`${axios.defaults.additionalBaseURL}/inference`)
      .then(response => {
        console.log(response.data);
        if (response.data.position === 'NORM' && response.data.age >= '50') {
          navigate("/text");
        } else if (response.data.position === 'NORM') {
          navigate("/basic");
        } else if (response.data.position === 'LOW') {
          navigate("/low");
        } else {
          navigate("/basic");
        }
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // 로딩 종료
      });
  };

  return (
    <m.KioskStartContainer>
      <m.MenuHeader>
        <LanguageSelect />
      </m.MenuHeader>
      <p>
        저희 매장의 키오스크는 <br />
        <span>카메라 AI</span>를 활용하여 <br />
        <span>나이대와 성별</span>을 추론하여 <br />
        메뉴 추천 및 다양한 모드를 <br />
        제공하고 있어요
      </p>
      {loading ? ( // 로딩 상태에 따라 로더 또는 버튼 표시
        <div className="loader loader--style2" title="1">
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="40rem" height="40rem" viewBox="0 0 50 50" style={{ enableBackground: 'new 0 0 50 50' }} xmlSpace="preserve">
            <path fill="#9A4BFF" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
              <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite" />
            </path>
          </svg>
        </div>
      ) : (
        <button 
          onClick={moveToMain}
        >
          주문하기
        </button>
      )}
    </m.KioskStartContainer>
  );
}

export default KioskStart;
