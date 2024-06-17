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
  }
`

// 상위 메뉴 카테고리 UI
export const TopCategoryBox = styled.div`
  width : 100%;
  height : 5rem;
  display : flex;
  align-items: end;
  justify-content : space-around;
  box-shadow : 0 35px 50px -20px rgba(0, 0, 0, 0.1);

  button {
    height : 4rem;
    width :  15rem;
    font-size : 2rem;
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
    height : 3rem;
    width :  12rem;
    font-size : 1.8rem;
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
  height : 38rem;
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
    margin-top : 0.5rem;
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
  width : 48rem;
  height : 25rem;
  border-radius : 1rem;
  background-color : ${props => props.theme.colors.colorBg};

  
`

// 현재 장바구니 현황
export const CurrentBagContainer = styled.div`
  width : 28rem;  
  height : 25rem;
  display : flex;
  flex-direction : column;
  justify-content : space-between;

  h3 {
    font-size : 1.9rem;
    text-align: right;
    font-family : 'Pretendard-Medium';
  }
  p {
    display : inline-block;
    width : 11rem;
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
    width : 26rem;
    color : ${props => props.theme.colors.colorBg};
    border : none;
    border-radius : 1rem;
    &.payBtn {
      height : 11rem;
      background-color : ${props => props.theme.colors.blue1};
      font-size : 2.7rem;
      font-family : 'Pretendard-Bold';
      }
      &.backBtn {
        height : 7rem;
        font-size : 2rem;
        background-color : ${props => props.theme.colors.gray6};
        font-family : 'Pretendard-SemiBold';
        color : ${props => props.theme.colors.colorMain};
    }
  }

`