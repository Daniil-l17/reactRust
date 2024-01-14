import { memo} from 'react';
import ServerElement from '../../component/serverElement/ServerElement';
import Loading from '../../component/looading/Loading';
import NotFound from '../../component/NotFound/NotFound';
import { useSortRunkQuery } from '../../redux/api/api';

const ServerRunk = (props: any) => {
  const {data,isLoading} = useSortRunkQuery({el: props.el,q: props.q})
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

export default memo(ServerRunk);
