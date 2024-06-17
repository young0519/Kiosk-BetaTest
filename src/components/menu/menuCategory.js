import MenuItem from "./menuItem";

function MenuCategory() {
    return (
      <div className=" w-screen">
        {/* 메뉴 선택 */}
        <div className="topCategory w-screen h-[100px] flex items-end justify-around shadow-s">
          <button className="topCategoryBtn">추천메뉴</button>
          <button className="topCategoryBtn">커피</button>
          <button className="topCategoryBtn">음료</button>
          <button className="topCategoryBtn">음식</button>
          <button className="topCategoryBtn">MD</button>
        </div>
        <div className="subCategory w-screen h-[70px] mt-[15px] bg- flex items-start justify-around">
            <button className="subCategoryBtn">시즌 메뉴</button>
            <button className="subCategoryBtn">할인&인기</button>
            <button className="subCategoryBtn"> </button>
            <button className="subCategoryBtn"> </button>
            <button className="subCategoryBtn"> </button>
        </div>
        {/* 상세 메뉴 종류 */}
        <div className="w-screen h-[812px] grid grid-cols-4 place-items-center gap-y-[40px] mt-[20px] overflow-y-scroll">
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
          <MenuItem/>
        </div>
      </div>
    )
  }
export default MenuCategory;  