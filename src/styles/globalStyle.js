import {createGlobalStyle} from "styled-components";


const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Pretendard-Black';
    src: url('../src/assets/fonts/Pretendard-Black.woff') format('woff');
}   
@font-face {
    font-family: 'Pretendard-Bold';
    src: url('../src/assets/fonts/Pretendard-Bold.woff') format('woff');
}
@font-face {
    font-family: 'Pretendard-ExtraBold';
    src: url('../src/assets/fonts/Pretendard-ExtraBold.woff') format('woff');
}
@font-face {
    font-family: 'Pretendard-ExtraLight';
    src: url('../src/assets/fonts/Pretendard-ExtraLight.woff') format('woff');
}
@font-face {
    font-family: 'Pretendard-Light';
    src: url('../src/assets/fonts/Pretendard-Light.woff') format('woff');
}
@font-face {
    font-family: 'Pretendard-Medium';
    src: url('../src/assets/fonts/Pretendard-Medium.woff') format('woff');
}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('../src/assets/fonts/Pretendard-Regular.woff') format('woff');
}
@font-face {
    font-family: 'Pretendard-SemiBold';
    src: url('../src/assets/fonts/Pretendard-SemiBold.woff') format('woff');
}
@font-face {
    font-family: 'Pretendard-Thin';
    src: url('../src/assets/fonts/Pretendard-Thin.woff') format('woff');
}

*, *::before, *::after {
  margin : 0;
  padding : 0;
  box-sizing : border-box;

}
@media (min-width: 800px) {
  html {
    font-size : 62.5% // 1rem = 10px
  }
}

body {
  font-family : 'Pretendard-Medium';
	display: flex;
  margin : auto;
  background : ${props => props.theme.colors.colorBg};
  color : ${props => props.theme.colors.colorMain};
  list-style : none;
  height : 100vh;
  justify-content: center;
}
`;

export default GlobalStyle;