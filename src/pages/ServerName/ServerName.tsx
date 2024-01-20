import { memo, useEffect} from 'react';
import Loading from '../../component/looading/Loading';
import ServerElement from '../../component/serverElement/ServerElement';
import NotFound from '../../component/NotFound/NotFound';
import { useLazySortNameQuery } from '../../redux/api/api';
import  ArrowLR  from '../../component/ArrowLeftRight/ArrowLR';


const ServerName = (props: any) => {
  const [fetchRepos,{data,isLoading}] = useLazySortNameQuery()


  useEffect(() => {
    fetchRepos(`https://api.battlemetrics.com/servers?sort=${props.el}&fields[server]=rank,name,players,maxPlayers,address,ip,port,country,location,details,status&relations[server]=game,serverGroup&filter[game]=rust&filter[search]=${props.q}`)
  },[props.el,props.q])

  const next = () => {
    if(data?.links.next)
      fetchRepos(data?.links.next)
  }

  const prev = () => {
    if(data?.links.prev)
      fetchRepos(data?.links.prev)
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data?.data.length === 0 ? (
        <NotFound />
      ) : (
        data?.data.map(el => <ServerElement key={el.id} el={el} />)
      )}
            <ArrowLR next={next} prev={prev} />
    </>
  );
};

export default memo(ServerName);
