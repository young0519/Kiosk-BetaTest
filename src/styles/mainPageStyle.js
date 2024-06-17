import styled from "styled-components";

export const KioskMainContainer = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
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
    }
`

export const languageBox = styled.div`
  width : 100%;
  height : 3rem;
  display : flex;
  align-items : center;
  justify-content : end;
  padding : 0 4rem;
  margin : 1rem 0 0 0;

  button {
    width : 9rem;
    height : 2.5rem;
    color : ${props => props.theme.colors.colorBg};
    background-color :  ${props => props.theme.colors.gray2};
    font-size : 1.5rem;
    margin : 0 1rem;
    border : none;
    border-radius : 5rem;
    &.ko{    
      background-color :  ${props => props.theme.colors.blue1};
    }
  }

`