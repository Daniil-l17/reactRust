import { memo } from 'react';
import { useMostPopularSkinQuery } from '../../redux/api/api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/slice';

const CategoriesSkins = () => {
  const { data } = useMostPopularSkinQuery(null);

  const nav = useNavigate();
  const db = useDispatch();

  const navigate = (e: string) => {
    nav('/skin/detail');
    db(actions.skinDetailAdd(e));
  };

  return (
    <div
      style={{ border: '0.01px solid #fffefe2b' }}
      className="bg-[rgba(37,39,48,0.34)] rounded-2xl mt-6 px-5 py-5">
      <h1 className="text-3xl font-semibold mb-4 ">Категории</h1>
      <ul className="flex flex-col gap-7  ">
        {data?.categories?.map(el => (
          <li
            style={{ border: '0.01px solid #fffefe2b' }}
            key={el.name}
            className=" py-5 px-6 rounded-2xl bg-[#56698c17] flex flex-col">
            <h1 className="mb-3 font-semibold text-2xl">{el.name}</h1>
            <div className="flex max-[1200px]:justify-center  flex-wrap  gap-5">
              {el?.items?.map(e => (
                <div
                  onClick={() => navigate(e.slug)}
                  style={{ border: '0.01px solid #fffefe2b' }}
                  key={e.name}
                  className="bg-[#36447163] transition duration-150 hover:bg-[#33597b9d] flex flex-col px-3 cursor-pointer py-6 items-center rounded-md w-[230px]">
                  <img width={120} height={120} src={e.imageUrl} alt="" />
                  <h1 className=" text-[17px] mt-5 font-semibold text-[#fefefe] text-left">
                    {e.name}
                  </h1>
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
