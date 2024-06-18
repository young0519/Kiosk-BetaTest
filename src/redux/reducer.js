// 초기 State 값
export const INITIAL_STATE = {
  checkMenuModalState : false,
  paymentSelectModalState : false,
  cardPayModalState : false,
  receiptModalState : false,

};

export const Reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_TOTAL_MENU_MODAL' : 
      return {
        ...state,
        checkMenuModalState: action.content
      };
    case 'SET_PAYMENT_MODAL' : 
      return {
        ...state,
        paymentSelectModalState: action.content
      };
    case 'SET_CARD_PAY_MODAL' : 
      return {
        ...state,
        cardPayModalState: action.content
      };
    case 'SET_RECEIPT_MODAL' : 
      return {
        ...state,
        receiptModalState: action.content
      };
    default: 
      return state;
  }
};