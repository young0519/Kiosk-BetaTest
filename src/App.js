import { Route, Routes, BrowserRouter } from 'react-router-dom'
import KioskMain from './pages/kioskMain'
import MenuSelect from './pages/menuSelectPage';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>  
          <Routes>       
            <Route path='/' element={<KioskMain />} />
            <Route path='/menu' element={<MenuSelect />} />
            <Route path='/menu/app' element={<MenuSelect />} />
          </Routes>
      </ThemeProvider> 
    </BrowserRouter>
  );
}

export default App;
