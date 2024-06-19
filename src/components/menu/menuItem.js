import gray_color_bg from '../../assets/imgs/gray_color_bg.png'
import * as m from "../../styles/menuPageStyle"


function MenuItem({key, name, price, setIsDetailMenuModal}) {
  const formattedPrice = price.toLocaleString('ko-KR');

  return (
    <m.MenuItemBox 
      onClick={() => {setIsDetailMenuModal(true)}}
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