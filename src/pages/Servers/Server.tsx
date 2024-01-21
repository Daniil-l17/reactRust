import {useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Link, Navigate, Route, Routes} from 'react-router-dom';
import ServerRunk from '../ServerRunk/ServerRunk';
import ServerName from '../ServerName/ServerName';
import { GoArrowUp } from 'react-icons/go';
import { GoArrowDown } from 'react-icons/go';
import ServerPlayer from '../ServerPlayer/ServerPlayer';
import { FaServer } from 'react-icons/fa';
import { useAppSelector } from '../../hooks/hook';
const Server = () => {
  const [filtr, setFiltr] = useState('rank');
  const [prove, setProve] = useState(false);
  const [prov, setProv] = useState(false);
  const [name, setName] = useState('name');
  const [pley, setPley] = useState(false);
  const [player, setPlayer] = useState('-players');
  const [inp, setInp] = useState('');
  const [results, setResults] = useState('');
  const serverDetail = useAppSelector(state => state.favoriteMainaAdd.serverDetail)
  
  const steps = () => {
    setProve(prev => !prev);
    if (prove) {
      setFiltr('rank');
    } else {
      setFiltr('-rank');
    }
  };

  const setPlayers = () => {
    setPley(prev => !prev);
    if (pley) {
      setPlayer('-players');
    } else {
      setPlayer('players');
    }
  };

  const navigateSearch = (inp:string) => {
    setResults(inp)
  };




  const setNameResault = () => {
    setProv(prev => !prev);
    if (prov) {
      setName('name');
    } else {
      setName('-name');
    }
  };


  return (
    <div className="m-auto max-w-[1800px]">
      <div style={{border: '0.01px solid #fffefe2b'}} className="bg-[rgba(37,39,48,0.34)] rounded-2xl mb-5 py-[60px] px-[30px]">
        <div className=' flex justify-between items-center mb-9'>
        <h1 className="text-left ml-3 text-4xl font-semibold uppercase ">Сервера Раста</h1>
        <Link className=' text-[#ffffff]' to='/servers/rust/favorites'>
        <div className=' relative'>
        <FaServer className=' text-[30px] cursor-pointer' />
        <div className=' bg-[#68276c] flex font-normal text-[12px] justify-center px-[8px] py-[4px] rounded-[30px] right-[-11px] bottom-[-4px] absolute'>
          <p className=' font-bold contents'>{serverDetail?.length}</p>
          </div>
        </div>
        </Link>
        </div>
        <div 
          className="py-3 w-[400px] border-solid mb-7 border-2 flex justify-between items-center border-neutral-200 px-4 rounded ">
          <input
            type="text"
            className="w-[250px]"
            value={inp}
            onChange={e => setInp(e.target.value)}
            name=""
            placeholder="Найти сервер..."
            id=""
          />
          <IoIosSearch onClick={() => navigateSearch(inp)} className="cursor-pointer text-[25px]" />
        </div>
        <div className="flex items-center justify-between px-6">
          <ul className="flex items-center gap-12">
            <Link className="text-[#e4dad1]" to="/servers">
              <li
                onClick={steps}
                className="text-xl flex items-center gap-2 font-bold cursor-pointer">
                Рейтинг {!prove ? <GoArrowUp /> : <GoArrowDown />}
              </li>
            </Link>
            <Link className="text-[#e4dad1]" to="/servers/name">
              <li
                onClick={setNameResault}
                className="text-xl flex items-center gap-2 font-bold cursor-pointer">
                Название {!prov ? <GoArrowUp /> : <GoArrowDown />}
              </li>
            </Link>
          </ul>
          <ul className="flex items-center gap-[130px]">
            <Link to="/servers/players">
              <li
                onClick={setPlayers}
                className="text-xl text-[#e4dad1] flex items-center gap-2 font-bold cursor-pointer">
                Игроки {!pley ? <GoArrowUp /> : <GoArrowDown />}
              </li>
            </Link>
            <li className="text-xl font-bold cursor-pointer">Последний вайп</li>
            <li className="text-xl fo nt-bold cursor-pointer">Следующей вайп</li>
            <li className="text-xl font-bold cursor-pointer">Расположение</li>
          </ul>
        </div>
        <Routes>
          <Route element={<ServerRunk q={results} el={filtr} />} path="/" />
          <Route element={<ServerName q={results} el={name} />} path="/name" />
          <Route element={<ServerPlayer q={results} el={player} />} path="/players" />
          <Route element={<Navigate to='/servers' replace /> } path="*" />
        </Routes>
      </div>
    </div>
  );
};

export default (Server)
