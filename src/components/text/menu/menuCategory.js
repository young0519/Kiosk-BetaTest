import MenuItem from "./menuItem";
import * as m from "../../../styles/text/menuPageTextStyle"
import { useEffect, useState } from "react";

function MenuCategory() {
  const [selectedTopCategory, setSelectedTopCategory] = useState('');
  // localStorage에서 menuData 가져오기
  const menuListData = JSON.parse(localStorage.getItem('menuData'));

  useEffect(() => {
    // 초기 선택 상태 설정
    setSelectedTopCategory('recommendedMenu');

    // 초기 선택 상태 설정
    const firstTopCategory = menuListData.topCategories[0];
    setSelectedTopCategory(firstTopCategory.name);
    
  }, []);

  // 기본 SubCategory 선택
  const handleTopCategoryClick = (topCategory) => {
    setSelectedTopCategory(topCategory.name);
  
  };




  return (
    <div style={{ width: '100%' }}>
      {/* 메뉴 선택 */}
      <m.TopCategoryBox className="topCategory">
        {menuListData.topCategories.map((topCategory) => (
          <m.TopCategoryBtn
            key={topCategory.id}
            className={`${selectedTopCategory === topCategory.name ? 'active' : ''}`}
            onClick={() => handleTopCategoryClick(topCategory)}
          >
            {topCategory.name}
          </m.TopCategoryBtn>
        ))}
      </m.TopCategoryBox>
      
      {/* 상세 메뉴 종류 */}
      <m.MenuItemContainer>
      {menuListData.topCategories
          .find((tc) => tc.name === selectedTopCategory)
          ?.items?.map((item, index) => (
            <MenuItem
              key={item.id}
              name={item.name}
              price={item.price}
              explain={item.info}
              photoUrl={item.photoUrl}
            />
          ))}
      </m.MenuItemContainer>
    </div>
  )
}

export default MenuCategory;  