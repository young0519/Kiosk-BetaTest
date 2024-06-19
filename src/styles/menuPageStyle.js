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
  width : 95%;
  margin : 0 auto;
  height : 6rem;
  display : flex;
  margin-top : 2.5rem;
  align-items: end;
  justify-content : space-around;
  box-shadow : 0 35px 40px -10px rgba(0, 0, 0, 0.1);
`
// 상위 카테고리 메뉴 버튼 UI
export const TopCategoryBtn = styled.button`
  height : 5rem;
  width :  15rem;
  font-size : 3rem;
  font-family : 'Pretendard-SemiBold';
  background-color : ${props => props.theme.colors.colorBg};
  border : none;
  &.active {
  border-bottom : 0.5rem solid ${props => props.theme.colors.blue1}
  }
`
// 하위 메뉴 카테고리 UI 
export const SubCategoryBox = styled.div`
  width : 95%;
  margin : 0 auto;
  height : 4.5rem;
  margin-top : 2rem;
  display : grid;
  grid-template-columns : repeat(5, 1fr);
  margin-left : 5.4rem;
  
`
// 하위 카테고리 메뉴 버튼 UI
export const SubCategoryBtn = styled.button`
    height : 4rem;
    width : 15rem;
    font-size : 2.5rem;
    font-family : 'Pretendard-SemiBold';
    border : none;
    background-color:transparent;
    color : ${props => props.theme.colors.blue1};
    &.active {
      background-color : ${props => props.theme.colors.blue1};
      color : ${props => props.theme.colors.colorBg};
      border-radius : 100rem;
    }
`

// 전체 메뉴 보여주기 레이아웃
export const MenuItemContainer = styled.div`
  width: 95%;
  height: 94.85rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: repeat(3, 1fr);
  place-items: center;
  row-gap: 3rem;
  column-gap: 2.3rem;
  margin-top: 2rem;
  overflow-y: scroll;
`

// 메뉴 Item 레이아웃
export const MenuItemBox = styled.div`
  width : 21rem;
  height : 29rem;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
  cursor : pointer;
  
  img {
    width: 18.5rem;
    height : 18.5rem;
    border-radius : 1rem;
  }
  h1 {
    width : 24rem;
    text-align : center;
    margin-top : 1.4rem;
    margin-bottom : 0.7rem;
    font-size : 2.8rem;
    font-family : 'Pretendard-SemiBold';
  }
  p {
    font-size : 2.3rem;
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

