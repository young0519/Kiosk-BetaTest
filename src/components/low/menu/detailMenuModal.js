import * as md from "../../../styles/low/modalLowStyle";
import hot_drink from '../../../assets/imgs/hot_drink.png'
import hot_drink_click from '../../../assets/imgs/hot_drink_click.png'
import ice_drink from '../../../assets/imgs/ice_drink.png'
import ice_drink_click from '../../../assets/imgs/ice_drink_click.png'
import small_cup from '../../../assets/imgs/small_cup.png'
import small_cup_click from '../../../assets/imgs/small_cup_click.png'
import middle_cup from '../../../assets/imgs/middle_cup.png'
import middle_cup_click from '../../../assets/imgs/middle_cup_click.png'
import big_cup from '../../../assets/imgs/big_cup.png'
import big_cup_click from '../../../assets/imgs/big_cup_click.png'
import right_arrow from '../../../assets/imgs/arrow-right.png'
import DetailOptionModal from "./detailOptionModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetMenuDetailModal, SetPayListInfo } from "../../../redux/kioskAction";


function DetailMenuModal() {
  const dispatch = useDispatch();

  let menuInfoList = useSelector( (state)=>{ return state.menuInfo } );
  let shoppingBagList = useSelector( (state)=>{ return state.shoppingBagList } );
  const formattedPrice = menuInfoList.menuPrice.toLocaleString('ko-KR');


  const [isDetailOptionModal, setIsDetailOptionModal] = useState(false);
  const [quantity, setQuantity] = useState(1); // 수량 상태 추가
  const [totalPrice, setTotalPrice] = useState(formattedPrice); // 수량 상태 추가
  const [selectedTemperature, setSelectedTemperature] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleTemperatureClick = (temperature) => {
    if (selectedTemperature === temperature) {
      setSelectedTemperature('');
    } else {
      setSelectedTemperature(temperature);
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    if (selectedSize === size) {
      setSelectedSize('');
    } else {
      setSelectedSize(size);
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
              <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', lineHeight:'5rem'}}>
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
          <h2>온도 선택</h2>
          <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
            <button 
              className={`drink-option hot ${selectedTemperature === 'hot' ? 'active' : ''}`}
              onClick={() => handleTemperatureClick('hot')}
            >뜨겁게</button>
            <button 
              className={`drink-option ice ${selectedTemperature === 'ice' ? 'active' : ''}`}
              onClick={() => handleTemperatureClick('ice')}
            > 차갑게</button>
          </div>
          <h2>사이즈 선택</h2>
          <div style={{display:'flex', alignItems:'center', justifyContent:'start'}}>
            <button 
              className={`drink-option small ${selectedSize === 'small' ? 'active' : ''}`}
              onClick={() => handleSizeClick('small')}
            >작은 컵</button>
            <button 
              className={`drink-option middle ${selectedSize === 'middle' ? 'active' : ''}`}
              onClick={() => handleSizeClick('middle')}
            >기본 컵</button>
            <button 
              className={`drink-option big ${selectedSize === 'big' ? 'active' : ''}`}
              onClick={() => handleSizeClick('big')}
            >큰 컵</button>
          </div>
          <button 
            className="drink-recipe-Btn"
            onClick={() => {setIsDetailOptionModal(true)}}
          >
            음료 제조 방식 선택<img src={right_arrow}/>
          </button>
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
      {
        isDetailOptionModal &&
        <md.ModalTopBackgroundContainer>
          <DetailOptionModal setIsDetailOptionModal={setIsDetailOptionModal}/>
        </md.ModalTopBackgroundContainer>
      }
    </div>
  )
}
export default DetailMenuModal;