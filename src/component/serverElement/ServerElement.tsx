import { FC } from 'react';
import { Daum } from '../../types/Type';
import { Link } from 'react-router-dom';

interface prod {
  el: Daum;
}

const ServerElement: FC<prod> = ({ el }) => {

  
  return (
    <div style={{border: '0.01px solid #fffefe2b'}} className=" rounded-2xl bg-[#1e293b40] w-full py-5 mt-3 flex items-center px-6">
      <div className="flex">
        <div className="flex items-center gap-4">
          <img src="/rust-icon-512 copy.png" width={30} alt="" />
          <h5>#{el.attributes.rank}</h5>
        </div>
        <div className=" w-[450px] ml-14">
          <Link to={`rust/${el.id}`}>
          <p className="mb-1 cursor-pointer text-[#1185ec]  hover:">{el.attributes.name}</p>
          </Link>
          <span className="text-[#94a3b8]">{el.attributes.details.map}</span>
        </div>
      </div>
      <div className="flex items-center pl-[180px] gap-[128px]">
        <h4 className='w-[130px]'>
          {el.attributes.players}/{el.attributes.maxPlayers}{' '}
          {el.attributes.details.rust_queued_players
            ? `(${el.attributes.details.rust_queued_players})`
            : null}
        </h4>
        <h4 className="w-[130px]">{el.attributes.details.rust_next_wipe} hours ago</h4>
        <h4 className="w-[160px]">Unknown</h4>
        <h4 className="">{el.attributes.details.rust_gc_mb} km</h4>
      </div>
    </div>
  );
};

export default ServerElement;
