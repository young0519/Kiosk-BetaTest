import styled from "styled-components";

// 전체 페이지 레이아웃
export const MenuSelectContainer = styled.div`
  width : 100vw;
  .go_to_credit {
    width : 100%;
    height : 30rem;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 1.5rem;
    background-color : ${props => props.theme.colors.gray1};
    box-shadow : 0 -35px 50px -10px rgba(0, 0, 0, 0.2);

  }
`

// 상위 메뉴 카테고리 UI
export const TopCategoryBox = styled.div`
  width : 100%;
  height : 5rem;
  display : flex;
  align-items: end;
  justify-content : space-around;
  box-shadow : 0 35px 40px -10px rgba(0, 0, 0, 0.1);

  button {
    height : 4.5rem;
    width :  15rem;
    font-size : 2.5rem;
    font-family : 'Pretendard-SemiBold';
    background-color : ${props => props.theme.colors.colorBg};
    border : none;
    &:hover {
    border-bottom : 0.5rem solid ${props => props.theme.colors.blue1}
    }
  }
`
// 하위 메뉴 카테고리 UI 
export const SubCategoryBox = styled.div`
  width : 100%;
  height : 3.5rem;
  margin-top : 1rem;
  display : flex;
  align-items: start;
  justify-content : space-around;
  
  button {
    height : 3.5rem;
    width :  12rem;
    font-size : 2rem;
    font-family : 'Pretendard-SemiBold';
    border : none;
    background-color:transparent;
    color : ${props => props.theme.colors.blue1};
    &:hover {
      background-color : ${props => props.theme.colors.blue1};
      color : ${props => props.theme.colors.colorBg};
      border-radius : 100rem;
    }
  }
`
// 전체 메뉴 보여주기 레이아웃
export const MenuItemContainer = styled.div`
  width : 100%;
  height : 102rem;
  display : grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  place-items: center;
  row-gap: 0.4rem;
  margin-top : 2rem;
  overflow-y: scroll;
`

// 메뉴 Item 레이아웃
export const MenuItemBox = styled.div`
  width : 20rem;
  height : 25rem;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  cursor : pointer;
  
  img {
    width: 18rem;
    height : 18rem;
    border-radius : 1rem;
  }
  h1 {
    margin : 0.5rem 0;
    font-size : 2rem;
    font-family : 'Pretendard-SemiBold';
  }
  p {
    font-size : 1.6rem;
    font-family : 'Pretendard-SemiBold';
  }
`

// 작은 장바구니 UI
export const SmallShoppingBag = styled.div`
  width : 70rem;
  height : 27rem;
  border-radius : 1rem;
  background-color : ${props => props.theme.colors.colorBg};
`

// 현재 장바구니 현황
export const CurrentBagContainer = styled.div`
  width : 32rem;  
  height : 27rem;
  display : flex;
  flex-direction : column;
  justify-content : space-between;

  h3 {
    font-size : 2.1rem;
    font-family : 'Pretendard-Regular';
    text-align: right;
  }
  p {
    display : inline-block;
    width : 13rem;
    text-align : center;
    font-size : 2rem;
    font-family : 'Pretendard-SemiBold';
    margin : 0 2rem;
    border-radius : 1rem;
    color : ${props => props.theme.colors.blue1};
    &.selected-menu {
      background-color : ${props => props.theme.colors.blue1};
      color : ${props => props.theme.colors.colorBg};
    } 
  }
  button {
    width : 32rem;
    color : ${props => props.theme.colors.colorBg};
    border : none;
    border-radius : 1rem;
    &.payBtn {
      height : 11rem;
      background-color : ${props => props.theme.colors.blue1};
      font-size : 3rem;
      font-family : 'Pretendard-Bold';
      letter-spacing : 0.2rem;
      }
      &.backBtn {
        height : 7rem;
        font-size : 2.2rem;
        background-color : ${props => props.theme.colors.gray6};
        font-family : 'Pretendard-SemiBold';
        color : ${props => props.theme.colors.colorMain};
    }
  }

`

// 모달을 위한 레이아웃
export const ModalBackgroundContainer = styled.div`
  position: absolute;
  width : 100%;
  height : 100%;
  z-index: 50;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.2rem);
`


// 메뉴 최종 확인 모달 
export const MenuCheckContainer = styled.div`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 1);
  width: 86rem;
  height: 130rem;
  padding : 2.6rem;
  border-radius : 2rem;
  display : grid;
  grid-template-rows: 10rem 0.1rem 85rem 5rem 0.1rem 8rem 15rem;
  h1 {
    margin : 4rem 0 2.5rem 0;
    font-size : 2.8rem;
    font-family : 'Pretendard-SemiBold';
    letter-spacing : 0.1rem;
    &.colored {
      margin : 0 0 1rem 0;
      color: ${props => props.theme.colors.blue2}
    }
  }
  hr{border: 0.1rem solid ${props => props.theme.colors.blue0}}
  .infoContainer {
    display : flex;
    align-items : center;
    justify-content : space-between;
    font-family : 'Pretendard-SemiBold';
    font-size : 2.5rem;
    .menuCount {
      display : flex;      
      width : 26rem;
      justify-content:space-between;
      p{
        width : 10rem;
        text-align : center;
        background-color: ${props => props.theme.colors.blue1};
        color: ${props => props.theme.colors.colorBg};
        border-radius : 1rem;
      }
    }
    .totalPrice {
      display : flex;
      width : 40rem;
      justify-content:space-between;
      p{
        width : 25rem;
        text-align : right;
        color: ${props => props.theme.colors.blue1}
      }
    }
  }
  .btnContainer {
    display : flex;
    align-items : center;
    justify-content : space-between;
    align-items: center;
    button {
      font-family : 'Pretendard-Bold';
      font-size : 3.8rem;
      height : 100%;
      border : none;
      border-radius : 1rem;
      &.cancel{
        width : 13rem;
        background-color : ${props => props.theme.colors.gray1}
        cursor : pointer;
      }
      &.here{
        width : 32rem;
        background-color : ${props => props.theme.colors.blue1};
        color : ${props => props.theme.colors.colorBg};
        cursor : pointer;
      }
      &.togo{
        width : 32rem;
        background-color : ${props => props.theme.colors.blue0};
        cursor : pointer;
      }
    }
  }
`