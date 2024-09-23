import { useDispatch } from "react-redux";
import * as k from "../styles/mainPageStyle";
import { useEffect, useState } from 'react';
import { SetScreenState } from "../redux/kioskAction";
import { useLocation, useNavigate } from "react-router-dom";

function ScreenSelect() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedScreen, setSelectedScreen] = useState('basic');

  useEffect(() => {
    // 현재 URL에 따라 selectedScreen 상태 설정
    switch (location.pathname) {
      case '/':
        setSelectedScreen('basic');
        break;
      case '/menu':
        setSelectedScreen('basic');
        break;
      case '/low':
        setSelectedScreen('low');
        break;
      case '/low/menu':
        setSelectedScreen('low');
        break;
      case '/text':
        setSelectedScreen('text');
        break;
      case '/text/menu':
        setSelectedScreen('text');
        break;
      default:
        setSelectedScreen('basic'); // 기본값 설정
        break;
    }
  }, [location.pathname]);

  const handleScreenClick = (Screen) => {
    setSelectedScreen(Screen);
    dispatch(SetScreenState(Screen));

    // 언어에 따라 다른 링크로 이동
    switch(Screen) {
      case 'basic':
        navigate('/'); // 기본 링크
        break;
      case 'low':
        navigate('/low'); // 저자세 링크
        break;
      case 'text':
        navigate('/text'); // 텍스트 강화 링크
        break;
      default:
        break;
    }
  };

  return (
    <k.languageBox>
      <button
        className={`ko ${selectedScreen === 'basic' ? 'active' : ''}`}
        onClick={() => handleScreenClick('basic')}
      >
        일반
      </button>
      <button
        className={`en ${selectedScreen === 'low' ? 'active' : ''}`}
        onClick={() => handleScreenClick('low')}
      >
        저자세
      </button>
      <button
        className={`en ${selectedScreen === 'text' ? 'active' : ''}`}
        onClick={() => handleScreenClick('text')}
      >
        텍스트 강화
      </button>
    </k.languageBox>
  );
}

export default ScreenSelect;