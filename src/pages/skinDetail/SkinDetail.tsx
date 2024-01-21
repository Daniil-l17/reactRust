import { useEffect } from 'react';
import { useAppSelector } from '../../hooks/hook';
import { useMostSkinDetailQuery } from '../../redux/api/api';
import Loading from '../../component/looading/Loading';

const SkinDetail = () => {
  const skin = useAppSelector(state => state.favoriteMainaAdd.skinDetail);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data, isLoading } = useMostSkinDetailQuery(skin);


  return (
    <div className=" min-h-[1000px] relative flex gap-[120px] m-auto pt-6 px-4 max-w-[1650px]">
      <div className="flex flex-col sticky h-[500px] top-6 mt-4 gap-6 w-[200px]">
        <div className="bg-[rgba(37,39,48,0.34)] transition duration-150 flex flex-col px-3 cursor-pointer py-6 items-center rounded-md w-full">
          <img width={120} height={120} src={data?.imageUrl} alt="" />
          <div className=" w-full flex-1">
            <h1 className=" text-[18px] font-semibold mt-3 text-left">{data?.name}</h1>
            <p className=" mt-1 text-[14px] font-semibold text-[#5a656c]">
              {data?.skins.length} варианта скинов{' '}
            </p>
          </div>
        </div>
        <img src="/skinsmonkey-desktop@1x.png" alt="" />
        <img src="/skincashier-desktop@1x.png" alt="" />
      </div>
      <div className="mt-4 w-full ">
        <div className="h-[300px]  py-5 bg-[rgba(37,39,48,0.34)] rounded-2xl w-full">
          <div
            style={{ borderBottom: '2px solid #101213' }}
            className="flex px-8 pb-2 items-center  justify-between">
            <div>
              <h1 className="text-[#f1f3f3] font-semibold text-[20px]">{data?.name}</h1>
              <p className="text-[#5a656c] font-semibold text-[13px]">Информация о предмете</p>
            </div>
            <div>
              <h1 className="text-right text-[#f1f3f3] font-semibold text-[20px]">
                {data?.rating.average} Звезды
              </h1>
              <p className="text-[#4c5c64] font-semibold text-[16px]">
                Оценено {data?.rating.votes} пользователями
              </p>
            </div>
          </div>
          <div className="flex gap-[40px] px-8 pt-4">
            <div className="flex gap-6 mt-4">
              <h1 className="text-[#677e8c] font-semibold">Статистика</h1>
              <ul className="flex items-center gap-6 flex-wrap">
                <li className="bg-[#23272a] cursor-pointer rounded-md px-8 py-2">
                  <h1>Урон {data?.info.statistics.damage}</h1>
                </li>
                <li className="bg-[#23272a] cursor-pointer rounded-md px-8 py-2">
                  <h1>Рисовать {data?.info.statistics.draw}</h1>
                </li>
                <li className="bg-[#23272a] cursor-pointer rounded-md px-8 py-2">
                  <h1>Перезарядка {data?.info.statistics.reload}</h1>
                </li>
                <li className="bg-[#23272a] cursor-pointer rounded-md px-8 py-2">
                  <h1>Прицельный конус {data?.info.statistics['aim cone']}</h1>
                </li>
                <li className="bg-[#23272a] cursor-pointer rounded-md px-8 py-2">
                  <h1>Вместимость {data?.info.statistics['capacity']}</h1>
                </li>
                <li className="bg-[#23272a] cursor-pointer rounded-md px-8 py-2">
                  <h1>Скорострельность {data?.info.statistics['rate of fire']}</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" mt-5 px-2 py-5 bg-[rgba(37,39,48,0.34)] rounded-2xl w-full">
          {isLoading ? (
            <Loading />
          ) : (
            <ul className="flex items-center justify-center gap-5 flex-wrap">
              {data?.skins.map(e => (
                <li
                  className="bg-[#36447163] transition duration-150 hover:bg-[#33597b9d] px-3 cursor-pointer py-3 flex flex-col items-center rounded-lg  w-[230px]"
                  key={e.id}>
                  <img src={e.imageUrl} alt="" />
                  <h1 className="mt-3">{e.name}</h1>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className='mt-5 mb-6 px-4 py-5 bg-[rgba(37,39,48,0.34)] rounded-2xl w-full'>
          <h1 className='text-[#fff font-semibold text-[20px] mb-4 ]'>Как контролировать спрей </h1>
          <p className='text-[14px] font-semibold text-[#f1f3f3] '>{data?.article}</p>
        </div>
      </div>
    </div>
  );
};

export default SkinDetail;
