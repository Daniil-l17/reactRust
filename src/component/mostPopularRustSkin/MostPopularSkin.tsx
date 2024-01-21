import { memo } from 'react';
import MostPopularDetail from './MostPopularDetail';
import { useMostPopularSkinQuery } from '../../redux/api/api';
import Loading from '../looading/Loading';

const MostPopularSkin = () => {
  const { data, isLoading } = useMostPopularSkinQuery(null);
  console.log(data);

  return (
    <div className="">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className=" text-xl  font-semibold ">Самые популярные скины Rust </h1>
          <ul className=" flex flex-wrap gap-5 mt-4">
            {data?.popular.map(el => {
              return <MostPopularDetail el={el} />;
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default memo(MostPopularSkin);
