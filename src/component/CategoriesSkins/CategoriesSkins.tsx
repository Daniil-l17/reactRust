import { memo } from 'react';
import { useMostPopularSkinQuery } from '../../redux/api/api';

const CategoriesSkins = () => {
  const { data } = useMostPopularSkinQuery(null);
  console.log(data);
  
  return (
    <div className="bg-[rgba(37,39,48,0.34)] rounded-2xl mt-6 px-5 py-5">
      <h1 className="text-3xl font-semibold mb-4 ">Категории</h1>
      <ul className='flex flex-col gap-7 '>
        {data?.categories?.map(el => (
          <li key={el.name} className=' flex flex-col'>
            <h1 className='mb-3 font-semibold text-xl'>{el.name}</h1>
            <div className='flex flex-wrap  gap-5'>
            {el?.items?.map(e => (
              <div key={e.name} className="bg-[#23272a] transition duration-150 hover:bg-[#363d43] flex flex-col px-3 cursor-pointer py-6 items-center rounded-md w-[230px]">
                <img width={120} height={120} src={e.imageUrl} alt="" />
                <h1 className=" text-[14px] font-semibold text-[#747f87] text-left">{e.name}</h1>
              </div>
            ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(CategoriesSkins);
