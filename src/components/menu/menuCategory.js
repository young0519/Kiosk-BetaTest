import MenuItem from "./menuItem";
import * as m from "../../styles/menuPageStyle"

function MenuCategory({setIsDetailMenuModal}) {
    return (
      <div style={{ width: '100%' }}>
        {/* 메뉴 선택 */}
        <m.TopCategoryBox className="topCategory">
          <button className="topCategoryBtn">추천메뉴</button>
          <button className="topCategoryBtn">커피</button>
          <button className="topCategoryBtn">음료</button>
          <button className="topCategoryBtn">음식</button>
          <button className="topCategoryBtn">MD</button>
        </m.TopCategoryBox>
        <m.SubCategoryBox className="subCategory">
            <button className="subCategoryBtn">시즌 메뉴</button>
            <button className="subCategoryBtn">할인&인기</button>
            <button className="subCategoryBtn"> </button>
            <button className="subCategoryBtn"> </button>
            <button className="subCategoryBtn"> </button>
        </m.SubCategoryBox>
        {/* 상세 메뉴 종류 */}
        <m.MenuItemContainer>
          <MenuItem setIsDetailMenuModal={setIsDetailMenuModal}/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
          <MenuItem/>
        </m.MenuItemContainer>
      </div>
    )
  }
export default MenuCategory;  