import * as md from "../styles/modalStyle"
import card_pay from "../assets/imgs/card_pay.png"
import { useDispatch } from "react-redux"
import { SetCardPayModal, SetPaymentModal, SetReceiptModal } from "../redux/kioskAction";

const CardPaymentModal = () => {
  const dispatch = useDispatch();

  const moveToReceipt = () => {
    dispatch(SetCardPayModal(false));
    dispatch(SetReceiptModal(true));
  }
  const moveToBack = () => {
    dispatch(SetCardPayModal(false));
    dispatch(SetPaymentModal(true));
  }


  return (
    <md.CardpayContainer>
      <h1>카드 결제 (간편 결제)</h1>
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
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <button 
          className="cancel"
          onClick={moveToBack}
        >취소</button>
        <button 
          className="pay-approval"
          onClick={moveToReceipt}
        >승인 요청</button>
      </div>
      <div className="imgBox">
        <img src={card_pay}/>
      </div>
    </md.CardpayContainer>
  )
}
export default CardPaymentModal;