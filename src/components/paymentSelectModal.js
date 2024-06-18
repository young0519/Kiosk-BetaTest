import * as md from "../styles/modalStyle"
import blank_img from "../assets/imgs/gray_color_bg.png"
import credit_card from "../assets/imgs/credit-card.png"
import coupon from "../assets/imgs/coupon.png"

const PaymentSelectModal = () => {

  return (
    <md.PaymentSelectContainer>
      <h1>결제 수단을 선택해주세요.</h1>
      <h1>1. 제휴 할인 선택</h1>
      <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
        <button className="discount-option"><img src={blank_img} alt="임시"/>KT</button>
        <button className="discount-option"><img src={blank_img} alt="임시"/>CJONE</button>
      </div>
      <h1>2. 결제 수단 선택</h1>
      <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
        <button className="payment-option"><img src={credit_card} alt="임시"/>카드</button>
        <button className="payment-option"><img src={coupon} alt="임시"/>쿠폰 사용</button>
      </div>
      <hr/>
      <div className="infoContainer">
        <div className="menuCount">
          <h3>선택메뉴</h3>
          <p>1</p>
          <h3>개</h3>
        </div>
        <div className="totalPrice">
          <h3>총 금액</h3>
          <p>2,500</p>
          <h3>원</h3>
        </div>
      </div>
      
    </md.PaymentSelectContainer>
  )
}

export default PaymentSelectModal;