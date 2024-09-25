import { useDispatch } from "react-redux";
import * as md from "../../styles/low/modalLowStyle";
import { SetPayListInfo, SetReceiptModal, SetTotalCount, SetTotalPrice } from "../../redux/kioskAction";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ReceiptModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(9);

  const NoReceipt = () => {
    dispatch(SetPayListInfo([]));
    dispatch(SetTotalPrice(0));
    dispatch(SetTotalCount(0));
    dispatch(SetReceiptModal(false));
    navigate('/');
  }

  const ReceiptPrint = () => {
    dispatch(SetPayListInfo([]));
    dispatch(SetTotalPrice(0));
    dispatch(SetTotalCount(0));
    dispatch(SetReceiptModal(false));
    navigate('/');
  }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    if (countdown === 0) {
      NoReceipt();
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [countdown, NoReceipt]);

  return (
    <md.ReceiptModalContainer>
      <h1>[주문 완료]</h1>
      <p>결제는 <span>영수증 하단 계좌 이체</span>해주세요!</p>
      <p>주문서를 직원에게 제출해주세요!</p>
      <div className="btnBox">
      <p><span>{countdown}</span> 초 후 자동 초기화</p>
        <button 
          onClick={ReceiptPrint}
          className="print"
        > 확인</button>
      </div>
    </md.ReceiptModalContainer>
  )
}
export default ReceiptModal;
