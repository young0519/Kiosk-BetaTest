import * as md from "../../styles/modalStyle";
import gray_color_bg from '../../assets/imgs/gray_color_bg.png'
import hot_drink from '../../assets/imgs/hot_drink.png'
import ice_drink from '../../assets/imgs/ice_drink.png'
import small_cup from '../../assets/imgs/small_cup.png'
import middle_cup from '../../assets/imgs/middle_cup.png'
import big_cup from '../../assets/imgs/big_cup.png'
import right_arrow from '../../assets/imgs/arrow-right.png'


function DetailMenuModal({setIsDetailMenuModal}) {

    return (
      <md.DetailMenuContainer>
        <h2>세부사항을 선택해주세요.</h2>
        <div className="drink-detail">
          <img 
            src={gray_color_bg} 
            alt="임시 사진"
          />
          <div className="drink-text">
            <h1>아메리카노</h1>
            <p>진한 에스프레소에 정수물을 더해 깔끔하고 강렬한 에스프레소를 가장 부드럽고 풍미있게 즐길 수 있는 커피</p>
            <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
              <h3>수량</h3>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <button>-</button>
                <p className="count">2,500</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <h2>온도 선택</h2>
        <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
          <button className="drink-option"><img src={hot_drink} alt="뜨거운 음료"/>뜨겁게</button>
          <button className="drink-option"><img src={ice_drink} alt="차가운 음료"/>차갑게</button>
        </div>
        <h2>사이즈 선택</h2>
        <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
          <button className="drink-option"><img src={small_cup} alt="작은 음료"/>작은 컵</button>
          <button className="drink-option"><img src={middle_cup} alt="중간 음료"/>기본 컵</button>
          <button className="drink-option"><img src={big_cup} alt="큰 음료"/>큰 컵</button>
        </div>
        <button className="drink-recipe-Btn">음료 제조 방식 선택<img src={right_arrow}/></button>
        <hr/>
        <h1 className="total-price">총 금액<p className="total-price-focus">99,999,99</p>원</h1>
        <div className="btnBox">
          <button className="cancel" onClick={() => setIsDetailMenuModal(false)}>취소</button>
          <button className="order">주문하기</button>
        </div>

      </md.DetailMenuContainer>
    )
  }
export default DetailMenuModal;