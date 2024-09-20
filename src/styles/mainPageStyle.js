import styled from "styled-components";

export const KioskMainContainer = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    h1 {
    font-size : 6rem;
    }
`
export const startBtnContainer = styled.div `
    width : 100%;
    display : flex;
    justify-content : space-around;
    align-items: end;
    margin : 0 0 6rem 0;
    button {
      width : 36rem;
      height : 17rem;
      font-size : 4rem;
      background : ${props => props.theme.colors.blue1};
      color : ${props => props.theme.colors.colorBg};
      border : none;
      border-radius : 3rem;
      cursor : pointer;
    }
`

export const languageBox = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 4rem;
  margin-top: 2rem;

  button {
    width: 14.2rem;
    height: 4rem;
    color: ${props => props.theme.colors.colorBg};
    background-color: ${props => props.theme.colors.gray2};
    font-size: 2.5rem;
    font-family : 'Pretendard-Medium';
    margin: 0 0.5rem;
    border: none;
    border-radius: 5rem;

    &.active {
      background-color: ${props => props.theme.colors.blue1};
    }
  }
`;