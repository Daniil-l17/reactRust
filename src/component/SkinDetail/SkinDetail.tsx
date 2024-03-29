import { FC } from "react";
import style from './skinDetail.module.scss';

  interface data {
      el: [{
        name: string,
        img: string,
        link: string,
        title: string,
        info: string
      }]
    }

const SkinDetail:FC<data> = ({el}) => {
  return (
    <>
    {el.map(el => 
      <div key={el.name} className="w-[400px] flex flex-col ">
          <div
  className={style.imgs}
  style={{
    backgroundImage: `url(./${el.img})`,
    backgroundPosition: 'center',
    backgroundAttachment: 'local',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }}>
    <div className="absolute right-0 left-0 bottom-0 bg-[#000000ae] flex justify-center py-3">
      <h1 className=" uppercase font-semibold">{el.info}</h1>
    </div>
  </div>
        <h1 className=" text-center mt-6 uppercase font-semibold text-[20px]">{el.name}</h1>
  <p className="text-[#bab1a8] text-center h-[50px] mt-3 mb-6">{el.title}</p>
  <div className="flex flex-1 items-center justify-around">
    <a target="_blank" className="text-[#e4dad1] " href={el.link}>
    <button className=' py-3 px-7 rounded-lg transition duration-100 hover:bg-[#f05b5bda] bg-[#ad2f2fc7]'>Купить в стим</button>
    </a>
  </div>
  </div>
      )}
    </>
  )
}

export default SkinDetail