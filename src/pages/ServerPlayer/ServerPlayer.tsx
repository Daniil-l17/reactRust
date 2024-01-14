import { memo} from 'react';
import ServerElement from '../../component/serverElement/ServerElement';
import Loading from '../../component/looading/Loading';
import NotFound from '../../component/NotFound/NotFound';
import { useSortPlayerQuery } from '../../redux/api/api';

const ServerPlayer = (props: any) => {
  const {data,isLoading} = useSortPlayerQuery({el: props.el,q: props.q})
  console.log(data)

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data?.data.length === 0 ? (
        <NotFound />
      ) : (
        data?.data.map(el => <ServerElement key={el.id} el={el} />)
      )}
    </>
  );
};

export default memo(ServerPlayer);
