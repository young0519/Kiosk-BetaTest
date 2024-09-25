import { useDispatch } from 'react-redux';
import gray_color_bg from '../../../assets/imgs/gray_color_bg.png'
import * as m from "../../../styles/basic/menuPageBasicStyle"
import { SetMenuDetailModal, SetMenuInfo } from '../../../redux/kioskAction';
import { useEffect, useState } from 'react';
import menuDataList from "../../../assets/menuData.json"
// import 나쵸플래터 from "../../../assets/imgs/나쵸플래터.png"
// import 불닭게티 from "../../../assets/imgs/불닭게티.png"
// import 프리미엄_불닭게티 from "../../../assets/imgs/프리미엄_불닭게티.png"
// import 쿠바리브레 from "../../../assets/imgs/쿠바리브레.png"
// import 선라이즈 from "../../../assets/imgs/선라이즈.png"
// import 스파클러_칵테일 from "../../../assets/imgs/스파클러_칵테일.png"

const imageMapping = {
  nachoPlater: require("../../../assets/imgs/나쵸플래터.png"),
  buldak: require("../../../assets/imgs/불닭게티.png"),
  Premium_buldak: require("../../../assets/imgs/프리미엄_불닭게티.png"),
  sunrise: require("../../../assets/imgs/선라이즈.png"),
  cuba: require("../../../assets/imgs/쿠바리브레.png"),
  po_spark: require("../../../assets/imgs/석류_스파클러.png"),
  grape_spark: require("../../../assets/imgs/청포도_스파클러.png") // 예시로 같은 이미지를 사용
};

function MenuItem({ name, price, explain, photoUrl }) {
  const dispatch = useDispatch();
  const [imageSrc, setImageSrc] = useState(gray_color_bg); // 기본 이미지로 초기화

  const formattedPrice = price.toLocaleString('ko-KR');

  useEffect(() => {
    // photoUrl에 따라 이미지를 설정
    const imgSrc = imageMapping[photoUrl] || gray_color_bg; // 매핑된 이미지가 없으면 기본 이미지 사용
    setImageSrc(imgSrc);
  }, [photoUrl]);

  const openDetailModal = () => {
    const menuInfo = {
      menuName : name,
      menuPrice : price,
      menuExplain : explain,
      menuPhotoUrl : imageSrc
    }
    dispatch(SetMenuInfo(menuInfo));
    dispatch(SetMenuDetailModal(true));

  }

  return (
    <m.MenuItemBox 
      onClick={openDetailModal}
    >
      <img 
        src={imageSrc} 
        alt="음료 사진"
      />
      <h1 >{name}</h1>
      <p>{formattedPrice} 원</p>
    </m.MenuItemBox>
  )
}
export default MenuItem;  