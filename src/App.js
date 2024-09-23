import { Route, Routes, BrowserRouter } from 'react-router-dom'
import KioskMain from './pages/kioskMain'
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyle from './styles/globalStyle';
import BasicMenuSelect from './pages/basic/basic_menuSelectPage';
import LowVersionKioskMain from './pages/low/low_kioskMain';
import LowVersionMenuSelect from './pages/low/low_menuSelectPage';
import TextVersionKioskMain from './pages/text/text_kioskMain';
import TextVersionMenuSelect from './pages/text/text_menuSelectPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>  
          <Routes>       
            <Route path='/' element={<KioskMain />} />
            <Route path='/menu' element={<BasicMenuSelect />} />
            <Route path='/low' element={<LowVersionKioskMain />} />
            <Route path='/low/menu' element={<LowVersionMenuSelect />} />
            <Route path='/text' element={<TextVersionKioskMain />} />
            <Route path='/text/menu' element={<TextVersionMenuSelect />} />
          </Routes>
      </ThemeProvider> 
    </BrowserRouter>
  );
}

export default App;
