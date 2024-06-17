import { Route, Routes, BrowserRouter } from 'react-router-dom'
import KioskMain from './pages/kioskMain'
import MenuSelect from './pages/menuSelectPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>       
        <Route path='/' element={<KioskMain />} />
        <Route path='/menu' element={<MenuSelect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
