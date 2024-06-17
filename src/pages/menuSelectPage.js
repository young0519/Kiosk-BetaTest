import ShoppingBag from "../components/shoppingBag";
import MenuCategory from "../components/menu/menuCategory";
import LanguageSelect from "../components/languageSelect";
import * as m from "../styles/menuPageStyle";


function MenuSelect() {

    return (
      <m.MenuSelectContainer>
        <LanguageSelect/>
        <MenuCategory/>
        <div className="go_to_credit">
            <ShoppingBag/>
            <m.CurrentBagContainer>
              <h3 >선택 메뉴 <p className="selected-menu">4</p>개</h3>
              <h3 >총 주문 금액 <p>999,999</p>원</h3>
              <button className="payBtn h-[152px] bg-blue1 text-[37px]">결제하기</button>
              <button className="backBtn h-[86px] bg-gray-6 text-[30px]">처음부터 다시하기</button>
            </m.CurrentBagContainer>
        </div>
      </m.MenuSelectContainer>
    )
  }
export default MenuSelect;