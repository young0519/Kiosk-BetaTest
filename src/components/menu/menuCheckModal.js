import { useSearchParams } from "react-router-dom";
import * as md from "../../styles/modalStyle";
import { useState } from "react";


function MenuCheckModal({ setIsCheckMenuModal }) {

  const [isPaymentSelectModal, setIsPaymentSelectModal] = useState(false);

  const selectPackage = () => {
    setIsPaymentSelectModal(true);
  }
    return (
      <div>
        <md.MenuCheckContainer>
          <h1>주문 내역을 다시 한번 확인하여 주세요.</h1>
          <hr/>
          <div>

          </div>
          <h1 className="colored">※ 매장 식사 시, 일회용 컵 사용 불가합니다 ※</h1>
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
          <div className="btnContainer">
            <button 
              className="cancel"
              onClick={()=> {setIsCheckMenuModal(false)}}
            >
              취소
            </button>
            <button 
              className="here"
              onClick={selectPackage}
            >
              매장 식사
            </button>
            <button 
              className="togo"
              onClick={selectPackage}
            >
              포장 주문
            </button>
          </div>
        </md.MenuCheckContainer>
        {
          isPaymentSelectModal && <></>
        }
      </div>
    )
  }
export default MenuCheckModal;