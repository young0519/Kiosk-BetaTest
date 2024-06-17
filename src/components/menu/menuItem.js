import gray_color_bg from '../../assets/imgs/gray_color_bg.png'
import * as m from "../../styles/menuPageStyle"


function MenuItem() {


  return (
    <m.MenuItemBox >
      <img 
        src={gray_color_bg} 
        alt="임시 사진"
      />
      <h1 >아메리카노</h1>
      <p>2,500원</p>
    </m.MenuItemBox>
  )
}
export default MenuItem;  