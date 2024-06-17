import styled from "styled-components";

export const KioskMainContainer = styled.div `
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
      color : ${props => props.theme.colors.white};
      border : none;
      border-radius : 3rem;
    }
`