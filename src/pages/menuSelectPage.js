import ShoppingBag from "../components/shoppingBag";
import MenuCategory from "../components/menu/menuCategory";
import LanguageSelect from "../components/languageSelect";
import * as m from "../styles/menuPageStyle";
import MenuCheckModal from "../components/menu/menuCheckModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function MenuSelect() {
  const navigate = useNavigate();

  const [isCheckMenuModal, setIsCheckMenuModal] = useState(false);

  return (
      <div>
        {
          isCheckMenuModal &&
          <m.ModalBackgroundContainer>
            <MenuCheckModal setIsCheckMenuModal={setIsCheckMenuModal}/>
          </m.ModalBackgroundContainer>
        }
        <m.MenuSelectContainer>
          <LanguageSelect/>
          <MenuCategory/>
          <div className="go_to_credit">
              <ShoppingBag/>
              <m.CurrentBagContainer>
                <h3 >선택 메뉴<p className="selected-menu">4</p>개</h3>
                <h3 >총 주문 금액 <p>999,999</p>원</h3>
                <button 
                  className="payBtn"
                  onClick={() => {setIsCheckMenuModal(true)}}
                >
                  결제하기
                </button>
                <button 
                  className="backBtn"
                  onClick={()=> navigate('/')}
                >
                  처음부터 다시하기
                </button>
              </m.CurrentBagContainer>
          </div>
        </m.MenuSelectContainer>
      </div>
  )
}

export default MenuSelect;