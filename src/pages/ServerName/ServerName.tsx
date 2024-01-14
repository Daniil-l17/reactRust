import { memo} from 'react';
import Loading from '../../component/looading/Loading';
import ServerElement from '../../component/serverElement/ServerElement';
import NotFound from '../../component/NotFound/NotFound';
import { useSortNameQuery } from '../../redux/api/api';

const ServerName = (props: any) => {
  const {data,isLoading} = useSortNameQuery({el: props.el,q: props.q})
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

export default memo(ServerName);
