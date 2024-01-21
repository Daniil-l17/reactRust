import { FaRegTrashCan } from 'react-icons/fa6';
import CartIsEmpty from '../../component/СartIsEmpty/CartIsEmpty';
import { useAppSelector } from '../../hooks/hook';
import { useDispatch } from 'react-redux';
import { actions } from '../../redux/slice';
import { Link } from 'react-router-dom';

const FavoritesServer = () => {
  const el = useAppSelector(state => state.favoriteMainaAdd.serverDetail);
  const db = useDispatch()
  
  return (
    <section className=" h-[100vh]">
      <div
        style={{ border: '0.01px solid #fffefe2b' }}
        className="bg-[rgba(37,39,48,0.34)] px-10 rounded-3xl m-auto max-w-[1700px] h-[800px]">
        <h1 className=" text-4xl uppercase text-center mt-8 font-semibold mb-8">Избранные</h1>
        {el?.length ? (
          <ul className=" h-[600px] flex flex-col gap-6 overflow-auto w-[70%]">
            {el.map(e => {
              const status = e.attributes.status;
              const online = 'font-semibold text-lg text-[green]';
              const ofline = 'font-semibold text-lg text-[red]';
              return (
                <li key={e.id}
                  style={{ border: '0.01px solid #fffefe2b' }}
                  className=" justify-between px-6 flex items-center w-[90%] h-[120px] rounded-3xl bg-[#1e293b40]">
                  <div className="flex gap-6 items-center">
                    <div
                      style={{
                        backgroundImage: `url(${e.attributes.details.rust_headerimage})`,
                        backgroundPosition: 'center',
                        backgroundAttachment: 'local',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                      }}
                      className=" h-[80px] w-[80px]"></div>
                    <h1
                      style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      className=" w-[390px] text-xl font-semibold">
                      {e.attributes.name}
                    </h1>
                  </div>
                  <div className=" flex gap-6 items-center ">
                    <p className={status === 'online' ? online : ofline}>
                      {status === 'online' ? 'Online' : 'Ofline'}
                    </p>
                    <Link style={{color: 'white'}} to={`/servers/rust/${e.id}`}>
                    
                    <button className=" font-semibold hover:bg-[#863e7dc4] transition duration-150 px-3 py-2 rounded-xl bg-[#7a2764cc]">
                      Подробнее
                    </button>
                    </Link>
                    <FaRegTrashCan onClick={() => db(actions.deleteServerDetail(e))} className=" text-[22px] cursor-pointer hover:text-[#924444] transition duration-150" />
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <CartIsEmpty />
        )}
      </div>
    </section>
  );
};

export default FavoritesServer;
