import { FC, memo } from "react"
import { Popular } from "../../types/TypeMostPopular"


interface detailMost {
  el: Popular
}

const MostPopularDetail:FC<detailMost> = ({el}) => {


  return (
    <>
          <li style={{border: '0.01px solid #fffefe2b'}} className="bg-[#242b4263] transition duration-150 hover:bg-[#42336f9d] px-3 cursor-pointer py-3 flex flex-col items-center rounded-lg  w-[230px]">
      <img width={120} height={120} src={el.imageUrl} alt="" />
        <h1 className=" text-[14px] font-semibold text-[#747f87] text-left">{el.item.name}</h1>
        <p className=" font-semibold text-left text-[#fff] text-[18px] mt-1 mb-2">{el.name}</p>
        <div className="flex justify-start w-full">
        <span className="text-[#b9c1c5] font-semibold text-[18px]">${el.price}</span>
        </div>
        </li>
    </>
  )
}

export default memo(MostPopularDetail)