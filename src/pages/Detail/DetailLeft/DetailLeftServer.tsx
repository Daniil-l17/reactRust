import { FC, memo } from 'react';
import { detail } from '../../../types/TypeDetail';
import { useDispatch } from 'react-redux';
import { actions } from '../../../redux/slice';
import { useAppSelector } from '../../../hooks/hook';

interface inf {
  detail: detail | any,
  id: number
}

const DetailLeftServer: FC<inf> = ({ detail,id }) => {
  const lastWipeData = new Date(Date.parse(detail?.data.attributes.details.rust_last_wipe));
  const lastWipeDay = new Date(Date.parse(detail?.data.attributes.details.rust_last_wipe));
  const pve = detail?.data.attributes.details.pve;
  const ofserver = detail?.data.attributes.details.official;
  const adress = detail?.data.attributes.address;
  const map = detail?.data.attributes.details.rust_url
  const map_url = detail?.data?.attributes?.details?.rust_maps?.url
  const thumbaiUrl =  detail?.data?.attributes?.details.rust_maps?.thumbnailUrl
  const {serverDetail} = useAppSelector(state => state.serverDetail)
  const isExsict = serverDetail.some(el => el.id === detail.data.id)
  const db = useDispatch()

  return (
    <div>
      <h1 className=" font-semibold text-3xl">{detail?.data.attributes.name}</h1>
      <ul className=" mt-3 text-[20px] font-medium flex flex-col gap-3 ">
        <li className="flex gap-3 items-center">
          <h4>Ранк</h4>
          <p className=" text-[#d7d7d7e2]">#{detail?.data.attributes.rank}</p>
        </li>

        <li className="flex gap-3 items-center">
          <h4>Количество игроков</h4>
          <p className=" text-[#d7d7d7e2]">
            {detail?.data.attributes.players}/{detail?.data.attributes.maxPlayers}
          </p>
        </li>
        <li className="flex gap-3">
          <h4>Адрес</h4>
          <div>
            <p>
              {adress ? adress : detail?.data.attributes.ip}:{detail?.data.attributes.port} (Игровой
              порт)
            </p>
            <p>
              {adress ? adress : detail?.data.attributes.ip}:{detail?.data.attributes.portQuery}{' '}
              (Query порт)
            </p>
          </div>
        </li>
        <li className="flex gap-3 items-center">
          <h4>Статус</h4>
          <p className=" text-[#00ffa6]">{detail?.data.attributes.status}</p>
        </li>
        <li className="flex gap-3 items-center">
          <h4>Расстояние</h4>
          <p className=" text-[#d7d7d7e2]">{detail?.data.attributes.details.rust_world_size} km</p>
        </li>
        <li className="flex gap-3 items-center">
          <h4>Страна</h4>
          <p className=" text-[#d7d7d7e2]">{detail?.data.attributes.country}</p>
        </li>
        <li className="flex gap-3 items-center">
          <h4>Средний FPS</h4>
          <p className=" text-[#d7d7d7e2]">{detail?.data.attributes.details.rust_fps_avg} fps</p>
        </li>
        <li className="flex gap-3 items-center">
          <h4>Последняя очистка</h4>
          <p className=" text-[#d7d7d7e2]">
            {lastWipeData.toLocaleDateString()} - {lastWipeDay.getDay()} дней назад
          </p>
        </li>
        <li className="flex gap-3 items-center">
          <h4>Пве</h4>
          <p className=" text-[#d7d7d7e2]">{pve ? 'true' : 'false'}</p>
        </li>
        <li className="flex gap-3 items-center">
          <h4>Веб-сайт</h4>
          <a
            target="_blank"
            className="text-[#0641e1e2] hover:decoration-1 hover:underline  "
            href={map ? map : ''}>
            {map ? map : 'Информации нет'}
          </a>
        </li>
        <li className="flex gap-3 items-center">
          <h4>Официальный сервер</h4>
          <p className="text-[#d7d7d7e2]">{ofserver ? 'true' : 'false'}</p>
        </li>
        <button onClick={() => db(actions.addServerDetail(detail))} className=' bg-[#6c3eb8] mt-4 rounded-xl py-[10px] w-[230px]'>{!isExsict ? 'Добавить в избарнное' : 'Удалить из избранного'}</button>
      </ul>
      <div className=' w-full flex gap-5 mt-14 '>
          <a target='_blank' className='w-[200px]' href={map_url ? map_url : '/servers'}>
          <div className='border-solid border-[#1185ec] border-2'>
          <img src={thumbaiUrl ? thumbaiUrl : '/404 1.png'} alt="" />
          </div>
          </a>
          <div className=' flex flex-col'>
          <h1 className=' mb-2 text-lg font-semibold '>Информация о карте</h1>
          <ul className='flex flex-col gap-4'>
            <li className='flex justify-between'>
              <div style={{borderRight: '1px',borderTop: '1px',borderBottom: '1px'}} className=' border-solid border-[#333c84]'>
                <div className=' ml-2'>
                <p className=' font-semibold'>Семя</p>
                <p className='text-[15px]'>49526</p>
                </div>
              </div>
              <div style={{borderRight: '1px',borderTop: '1px',borderBottom: '1px'}} className=' border-solid border-[#333c84]'>
              <div className=' ml-2'>
                <p className=' font-semibold'>Размер</p>
                <p className='text-[15px]'>4750</p>
              </div>
              </div>
            </li>
            <li className='flex justify-between'>
              <div style={{borderRight: '1px',borderTop: '1px',borderBottom: '1px'}} className=' border-solid border-[#333c84]' >
                <div className=' ml-2'>
                <p className=' font-semibold'>Памятники</p>
                <p className='text-[15px]'>149</p>
                </div>
              </div>
              <div style={{borderRight: '1px',borderTop: '1px',borderBottom: '1px'}} className=' border-solid border-[#333c84]'>
                <div className=' ml-2'>
                <p className='w-[57px] font-semibold'>Кол.объектов</p>
                <p className='text-[15px]'>630 211</p>
                </div>
              </div>
            </li>
          </ul>
            <a href={map_url ? map_url : `/servers/rust/${id}`} className='text-[#1185ec] cursor-pointer mt-5 hover:underline hover:decoration-1'>Информация на RustMaps</a>
          </div>
          </div>
    </div>
  );
};

export default memo(DetailLeftServer)
