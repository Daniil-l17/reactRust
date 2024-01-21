import { memo, useEffect } from 'react';
import ServerElement from '../../component/serverElement/ServerElement';
import Loading from '../../component/looading/Loading';
import NotFound from '../../component/NotFound/NotFound';
import { useLazySortRunkQuery } from '../../redux/api/api';
import ArrowLR from '../../component/ArrowLeftRight/ArrowLR';

const ServerRunk = (props: any) => {
  /*  const {data,isLoading} = useSortRunkQuery({el: props.el,q: props.q})*/
  const [fetchRepos, { data, isLoading }] = useLazySortRunkQuery();

  useEffect(() => {
    fetchRepos(
      `https://api.battlemetrics.com/servers?sort=${props.el}&fields[server]=rank,name,players,maxPlayers,address,ip,port,country,location,details,status&relations[server]=game,serverGroup&filter[game]=rust&filter[search]=${props.q}`,
    );
  }, [props.el, props.q]);

  const next = () => {
    if (data?.links.next) fetchRepos(data?.links.next);
    window.scroll(0, 0);
  };

  const prev = () => {
    if (data?.links.prev) fetchRepos(data?.links.prev);
    window.scroll(0, 0);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : data?.data.length === 0 ? (
        <NotFound />
      ) : isLoading ? (
        <Loading />
      ) : (
        data?.data.map(el => <ServerElement key={el.id} el={el} />)
      )}
      <ArrowLR next={next} prev={prev} />
    </>
  );
};

export default memo(ServerRunk);
