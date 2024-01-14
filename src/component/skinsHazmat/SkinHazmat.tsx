import { FC} from 'react';
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

const SkinHazmat:FC<data> = ({el}) => {



  return (
    <>
        {el.map(el => 
      <div key={el.name} className="w-[430px] flex flex-col ">
        <div className={style.vid}>
        {/* 
// @ts-ignore */}
        <video className=' relative' autoPlay muted playsInline loop="loop" src={el.img}>
        </video>
        <div className="absolute right-0 left-0 bottom-0 bg-[rgba(0,0,0,.8)] flex justify-center py-3">
      <h1 className=" uppercase font-semibold">{el.info}</h1>
    </div>
        </div>
        <h1 className=" text-center mt-6 uppercase font-semibold text-[20px]">{el.name}</h1>
  <p className="text-[#bab1a8] text-center h-[50px] mt-3 mb-6">{el.title}</p>
  <div className="flex flex-1 items-center justify-around">
    <button className={style.btn2}>Читать</button>
    <a target="_blank" className="text-[#e4dad1] " href={el.link}>
    <button className={style.btn}>Купить в стим</button>
    </a>
  </div>
  </div>
      )}
    </>
  )
}

export default SkinHazmat