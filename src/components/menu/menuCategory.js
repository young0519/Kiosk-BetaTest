import MenuItem from "./menuItem";
import * as m from "../../styles/menuPageStyle"
import { useEffect, useState } from "react";
import menuData from "../../assets/menuList.json"

function MenuCategory({setIsDetailMenuModal}) {
  const [selectedTopCategory, setSelectedTopCategory] = useState('recommendedMenu');
  const [selectedSubCategory, setSelectedSubCategory] = useState('seasonalMenu');

  useEffect(() => {
    // 초기 선택 상태 설정
    setSelectedTopCategory('recommendedMenu');
    setSelectedSubCategory('seasonalMenu');
  }, []);
  const handleTopCategoryClick = (topCategory) => {
    setSelectedTopCategory(topCategory);
    if(topCategory === 'recommendedMenu') {
      setSelectedSubCategory('seasonalMenu');
    }
    if(topCategory === 'coffee') {
      setSelectedSubCategory('espresso');
    }
    if(topCategory === 'beverages') {
      setSelectedSubCategory('ade');
    }
    if(topCategory === 'food') {
      setSelectedSubCategory('dessert');
    }
    if(topCategory === 'md') {
      setSelectedSubCategory('coffeeMd');
    }
  };

  const handleSubCategoryClick = (subCategory) => {
    setSelectedSubCategory(subCategory);
  };



  return (
    <div style={{ width: '100%' }}>
      {/* 메뉴 선택 */}
      <m.TopCategoryBox className="topCategory">
        {menuData.topCategories.map((topCategory) => (
          <m.TopCategoryBtn
            key={topCategory.className}
            className={`${topCategory.className} ${selectedTopCategory === topCategory.className ? 'active' : ''}`}
            onClick={() => handleTopCategoryClick(topCategory.className)}
          >
            {topCategory.name}
          </m.TopCategoryBtn>
        ))}
      </m.TopCategoryBox>
      <m.SubCategoryBox className="subCategory">
        {menuData.topCategories.find((tc) => tc.className === selectedTopCategory)?.subCategories.map((subCategory) => (
          <m.SubCategoryBtn
            key={subCategory.className}
            className={`${subCategory.className} ${selectedSubCategory === subCategory.className ? 'active' : ''}`}
            onClick={() => handleSubCategoryClick(subCategory.className)}
          >
            {subCategory.name}
          </m.SubCategoryBtn>
        ))}
      </m.SubCategoryBox>
      {/* 상세 메뉴 종류 */}
      <m.MenuItemContainer>
      {menuData.topCategories
          .find((tc) => tc.className === selectedTopCategory)
          ?.subCategories.find((sc) => sc.className === selectedSubCategory)
          ?.items?.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              price={item.price}
              setIsDetailMenuModal={setIsDetailMenuModal}
            />
          ))}
      </m.MenuItemContainer>
    </div>
  )
}

export default MenuCategory;  