import gray_color_bg from '../../assets/imgs/gray_color_bg.png'


function MenuItem() {


  return (
    <div className=" w-[241px] h-[280px] flex flex-col items-center justify-center cursor-pointer]">
      <img 
        src={gray_color_bg} 
        alt="임시 사진"
        className='w-[180px] h-[180px] rounded-[10px]'
      />
      <h1 className='mt-[5px] text-[28px] font-Pretendard-SemiBold'>아메리카노</h1>
      <p className='text-[23px] font-Pretendard-SemiBold'>2,500원</p>
    </div>
  )
}
export default MenuItem;  