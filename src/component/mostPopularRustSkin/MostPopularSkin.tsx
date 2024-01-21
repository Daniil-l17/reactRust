import { memo } from 'react';
import MostPopularDetail from './MostPopularDetail';
import { useMostPopularSkinQuery } from '../../redux/api/api';
import Loading from '../looading/Loading';

const MostPopularSkin = () => {
  const { data, isLoading } = useMostPopularSkinQuery(null);


  return (
    <div className="bg-[rgba(37,39,48,0.34)] rounded-2xl py-5 px-5">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className=" text-2xl   font-semibold ">Популярные скины Rust </h1>
          <ul className=" flex flex-wrap gap-5 mt-4">
            {data?.popular.map(el => {
              return <MostPopularDetail key={el.id} el={el} />;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default memo(MostPopularSkin);
