import * as md from "../../../styles/modalStyle";
import nacho from '../../../assets/imgs/나초.png'
import nacho_click from '../../../assets/imgs/nacho_click.png'
import ogamza from '../../../assets/imgs/오감자.png'
import ogamza_click from '../../../assets/imgs/ogamza_click.png'
import cheetos from '../../../assets/imgs/치토스.png'
import cheetos_click from '../../../assets/imgs/cheetos_click.png'
import 양상추 from '../../../assets/imgs/양상추.png'
import 양상추_click from '../../../assets/imgs/양상추_click.png'
import onion from '../../../assets/imgs/양파.png'
import onion_click from '../../../assets/imgs/onion_click.png'
import tomato from '../../../assets/imgs/토마토.png'
import tomato_click from '../../../assets/imgs/tomato_click.png'
import cheeze from '../../../assets/imgs/치즈.png'
import cheeze_click from '../../../assets/imgs/cheeze_click.png'
import salsa from '../../../assets/imgs/살사.png'
import salsa_click from '../../../assets/imgs/salsa_click.png'
import barbaque from '../../../assets/imgs/바비큐.png'
import barbaque_click from '../../../assets/imgs/barbaque_click.png'
import hotsauce from '../../../assets/imgs/핫소스.png'
import hotsauce_click from '../../../assets/imgs/hotsauce_click.png'
import DetailOptionModal from "./detailOptionModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetMenuDetailModal, SetPayListInfo } from "../../../redux/kioskAction";


function DetailMenuModal() {
  const dispatch = useDispatch();

  let menuInfoList = useSelector( (state)=>{ return state.menuInfo } );
  let shoppingBagList = useSelector( (state)=>{ return state.shoppingBagList } );
  const formattedPrice = menuInfoList.menuPrice.toLocaleString('ko-KR');
  const isNachoPlatter = menuInfoList?.menuName === "나쵸 플래터";


  const [quantity, setQuantity] = useState(1); // 수량 상태 추가
  const [totalPrice, setTotalPrice] = useState(formattedPrice); // 수량 상태 추가
  const [selectedChip, setSelectedChip] = useState('');
  const [selectedVeg, setSelectedVeg] = useState([]); // 배열로 변경
  const [selectedSauce, setSelectedSauce] = useState([]); // 배열로 변경

  const handleChipClick = (chip) => {
    if (selectedChip === chip) {
      setSelectedChip('');
    } else {
      setSelectedChip(chip);
    }
  };

  const handleVegClick = (veg) => {
    if (selectedVeg.includes(veg)) {
      setSelectedVeg(selectedVeg.filter(item => item !== veg)); // 이미 선택된 경우 제거
    } else if (selectedVeg.length < 3) {
      setSelectedVeg([...selectedVeg, veg]); // 최대 3개까지 추가
    }
  };

  const handleSauceClick = (sauce) => {
    if (selectedSauce.includes(sauce)) {
      setSelectedSauce(selectedSauce.filter(item => item !== sauce)); // 이미 선택된 경우 제거
    } else if (selectedSauce.length < 3) {
      setSelectedSauce([...selectedSauce, sauce]); // 최대 3개까지 추가
    }
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const AddCartClick = () => {
    const addMenu = {
      menuName: menuInfoList.menuName,
      quantity: quantity,
      perPrice : menuInfoList.menuPrice,
      totalPrice: totalPrice
    };
  
    dispatch(SetPayListInfo([...shoppingBagList, addMenu]));
    dispatch(SetMenuDetailModal(false));
  };

  useEffect(()=> {
    const totalPrice = quantity*menuInfoList.menuPrice;
    setTotalPrice(totalPrice);
  }, [quantity]);

  return (
    <div>
      <md.DetailMenuContainer>
          <h2>세부사항을 선택해주세요.</h2>
          <div className="drink-detail">
            <img 
              src={menuInfoList.menuPhotoUrl} 
              alt="임시 사진"
            />
            <div className="drink-text">
              <h1>{menuInfoList.menuName}</h1>
              <p>{menuInfoList.menuExplain}</p>
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                <h3>수량</h3>
                <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <button onClick={handleQuantityDecrement}>-</button>
                  <p className="count">{quantity}</p>
                  <button onClick={handleQuantityIncrement}>+</button>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          {isNachoPlatter ? (
            <>
              <h2>과자 선택 (택 1)</h2>
              <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                <button 
                  className={`drink-option nacho active`}
                  onClick={() => handleChipClick('nacho_click')}
                ><img src={nacho_click} alt="따뜻한 음료"/>나쵸</button>
                <button 
                  className={`drink-option ogamza ${selectedChip === 'ogamza' ? 'active' : ''}`}
                  onClick={() => handleChipClick('ogamza')}
                ><img src={selectedChip === 'ogamza' ? ogamza_click : ogamza} alt="차가운 음료"/>오감자</button>
                <button 
                  className={`drink-option cheetos ${selectedChip === 'cheetos' ? 'active' : ''}`}
                  onClick={() => handleChipClick('cheetos')}
                ><img src={selectedChip === 'cheetos' ? cheetos_click : cheetos} alt="차가운 음료"/>치토스</button>
              </div>
              <h2>야채 선택 (택 3)</h2>
              <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                {/* <button 
                  className={`drink-option onion ${selectedVeg === 'onion' ? 'active' : ''}`}
                  onClick={() => handleVegClick('onion')}
                ><img src={selectedVeg === 'onion' ? onion_click : onion} alt="작은 음료"/>양파</button> */}
                <button 
                  className={`drink-option onion ${selectedVeg.includes('onion') ? 'active' : ''}`}
                  onClick={() => handleVegClick('onion')}
                ><img src={selectedVeg.includes('onion') ? onion_click : onion} alt="작은 음료" />양파</button>
                <button 
                  className={`drink-option tomato ${selectedVeg.includes('tomato') ? 'active' : ''}`}
                  onClick={() => handleVegClick('tomato')}
                ><img src={selectedVeg.includes('tomato') ? tomato_click : tomato} alt="작은 음료" />토마토</button>
                <button 
                  className={`drink-option halapino ${selectedVeg.includes('halapino') ? 'active' : ''}`}
                  onClick={() => handleVegClick('halapino')}
                ><img src={selectedVeg.includes('halapino') ? hotsauce_click : hotsauce} alt="작은 음료" />할라피뇨</button>
                <button 
                  className={`drink-option 양상추 ${selectedVeg.includes('양상추') ? 'active' : ''}`}
                  onClick={() => handleVegClick('양상추')}
                ><img src={selectedVeg.includes('양상추') ? 양상추_click : 양상추} alt="작은 음료" />양상추</button>
              </div>
              <h2>소스 선택 (택 2~3)</h2>
              <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
                <button 
                  className={`drink-option cheeze ${selectedSauce.includes('cheeze') ? 'active' : ''}`}
                  onClick={() => handleSauceClick('cheeze')}
                ><img src={selectedSauce.includes('cheeze') ? cheeze_click : cheeze} alt="작은 음료" />치즈</button>
                <button 
                  className={`drink-option salsa ${selectedSauce.includes('salsa') ? 'active' : ''}`}
                  onClick={() => handleSauceClick('salsa')}
                ><img src={selectedSauce.includes('salsa') ? salsa_click : salsa} alt="작은 음료" />살사</button>
                <button 
                  className={`drink-option barbaque ${selectedSauce.includes('barbaque') ? 'active' : ''}`}
                  onClick={() => handleSauceClick('barbaque')}
                ><img src={selectedSauce.includes('barbaque') ? barbaque_click : barbaque} alt="작은 음료" />바비큐</button>
                <button 
                  className={`drink-option hotsauce ${selectedSauce.includes('hotsauce') ? 'active' : ''}`}
                  onClick={() => handleSauceClick('hotsauce')}
                ><img src={selectedSauce.includes('hotsauce') ? hotsauce_click : hotsauce} alt="작은 음료" />핫소스</button>
              </div>
            </>
          ) : (
            <div style={{height:'50rem'}}>
              
            </div>
          )}
          <hr/>
          <h1 className="total-price">총 금액<p className="total-price-focus">{totalPrice.toLocaleString('ko-KR')}</p>원</h1>
          <div className="btnBox">
            <button 
              className="cancel" 
              onClick={() => dispatch(SetMenuDetailModal(false))}
              >취소</button>
            <button 
              className="order"
              onClick={AddCartClick}
            >주문하기</button>
          </div>

      </md.DetailMenuContainer>
    </div>
  )
}
export default DetailMenuModal;