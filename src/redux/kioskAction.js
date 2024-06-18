// 메뉴 최종 확인 모달 여부 저장하는 action
export const SetTotalMenuModal = (content) => {
  return {
    type : 'SET_TOTAL_MENU_MODAL',
    content
  }
}
// 결제 방식 선택 모달 여부 저장하는 action
export const SetPaymentModal = (content) => {
  return {
    type : 'SET_PAYMENT_MODAL',
    content
  }
}
// 카드 결제 모달 여부 저장하는 action
export const SetCardPayModal = (content) => {
  return {
    type : 'SET_CARD_PAY_MODAL',
    content
  }
}
// 영수증 출력 확인 모달 여부 저장하는 action
export const SetReceiptModal = (content) => {
  return {
    type : 'SET_RECEIPT_MODAL',
    content
  }
}