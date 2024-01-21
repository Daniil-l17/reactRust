import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../component/looading/Loading';
import DetailLeftServer from './DetailLeft/DetailLeftServer';
import { useDetailQuery } from '../../redux/api/api';
import NotFound from '../../component/NotFound/NotFound';

const DetailServer = () => {
  const { id }: any = useParams();

  const {data,isLoading,error} = useDetailQuery(id,{
    refetchOnFocus: true,
    refetchOnReconnect: true,
  })


  const [player, setPlayer] = useState([]);
  const name = data?.included.map(el => el.attributes.name);
  const [inp,setInp] = useState('')
  
  /*  const startPlayer = detail?.included.map(el => el.attributes.start);
  const resp = startPlayer?.map(el => new Date(Date.parse(el)));
  console.log(resp)*/
  /*  const second = resp?.map(el => el.getMinutes())
  console.log(second?.filter(el => el < 1));*/

  /*  const funtDate = () => {
    const result = resp?.filter(el => el.getSeconds() > 40);
    console.log(result);
    setPlayer(result);
  };
  useEffect(() => {
    funtDate();
  }, []);
  console.log(player);*/


  useEffect(() => {
    {/* 
// @ts-ignore */}
    setPlayer(name)
  },[data])

  return (
    <div>
      <div style={{border: '0.01px solid #fffefe2b'}} className="bg-[rgba(37,39,48,0.34)] rounded-3xl py-7 mb-10 m-auto max-w-[1750px] px-10 ">
        {!error ?  !isLoading ? (
          <div>
          <div className=" flex  justify-between">
            <DetailLeftServer detail={data} id={id} />
            <div className="flex flex-col">
              <div className='flex items-center shadow-md shadow-[#db7575] justify-between mb-4 w-full border-[#a84343] border-2 border-solid px-4 py-3 rounded'>
              <input value={inp} onChange={e => setInp(e.target.value)} type="text" placeholder='Поиск по Никнейму' />
              </div>
              <ul className='flex flex-col h-[600px] gap-2 w-[300px] overflow-auto'>
                {/* 
// @ts-ignore */}
              {player?.filter(item => item?.includes(inp.toLowerCase())).map((el,i) => 
                <li style={{border: '0.01px solid #fffefe2b'}}  className=' w-[97%] transition duration-150 hover:bg-[#40649e40] bg-[#1e293b40] px-2 py-3 rounded-lg cursor-pointer' key={i}>{el}</li>
                )}
              </ul>
            </div>
          </div>
          </div>
        ) : (
          <Loading />
        ) : <NotFound/>}
      </div>
    </div>
  );
};

export default DetailServer;
