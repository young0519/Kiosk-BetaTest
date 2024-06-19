import { useDispatch } from 'react-redux';
import gray_color_bg from '../../assets/imgs/gray_color_bg.png'
import * as m from "../../styles/menuPageStyle"
import { SetMenuDetailModal, SetMenuInfo } from '../../redux/kioskAction';


function MenuItem({key, name, price, explain}) {
  const dispatch = useDispatch();

  const formattedPrice = price.toLocaleString('ko-KR');
  const openDetailModal = () => {
    const menuInfo = {
      menuName : name,
      menuPrice : price,
      menuExplain : explain,
    }
    dispatch(SetMenuInfo(menuInfo));
    dispatch(SetMenuDetailModal(true));

  }

  return (
    <m.MenuItemBox 
      onClick={openDetailModal}
    >
      <img 
        src={gray_color_bg} 
        alt="임시 사진"
      />
      <h1 >{name}</h1>
      <p>{formattedPrice} 원</p>
    </m.MenuItemBox>
  )
}
export default MenuItem;  