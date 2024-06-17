import ShoppingBag from "../components/shoppingBag";
import MenuCategory from "../components/menu/menuCategory";
import LanguageSelect from "../components/languageSelect";

function MenuSelect() {
    return (
      <div className="h-screen w-screen justify-between">
        <LanguageSelect/>
        <MenuCategory/>
        <div className="go_to_credit bottom-0 bg-gray-1 h-[400px] w-screen flex justify-between items-center p-[15px]">
            <ShoppingBag/>
            <div className="h-[358px] flex flex-col justify-between">
              <h3 className="text-[28px] text-right">선택 메뉴 <p className=" inline-block bg-blue1 text-white  w-[114px] h-[40px] text-center mx-[20px] rounded-[10px]">4</p>개</h3>
              <h3 className="text-[28px] text-right">총 주문 금액 <p className=" inline-block text-blue1 w-[114px] h-[40px] text-center mx-[20px] rounded-[10px]">999,999</p>원</h3>
              <button className="w-[360px] h-[152px] bg-blue1 text-white rounded-[10px] text-[37px]">결제하기</button>
              <button className="w-[360px] h-[86px] bg-gray-6 text-white text-[30px] rounded-[10px]">처음부터 다시하기</button>
            </div>
        </div>
      </div>
    )
  }
export default MenuSelect;