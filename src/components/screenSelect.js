import { useDispatch } from "react-redux";
import * as k from "../styles/mainPageStyle";
import { useState } from 'react';
import { SetScreenState } from "../redux/kioskAction";

function ScreenSelect() {
  const dispatch = useDispatch();
  const [selectedScreen, setSelectedScreen] = useState('basic');

  const handleScreenClick = (Screen) => {
    setSelectedScreen(Screen);
    dispatch(SetScreenState(Screen));
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
        className={`en ${selectedScreen === 'rein' ? 'active' : ''}`}
        onClick={() => handleScreenClick('rein')}
      >
        텍스트 강화
      </button>
    </k.languageBox>
  );
}

export default ScreenSelect;