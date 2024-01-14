import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Root } from "../../types/Type";
import { detail } from "../../types/TypeDetail";

  const API_BASE = 'https://api.battlemetrics.com/servers'

  interface det {
      el: string,
      q: string
  }

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    sortRunk: builder.query<Root, det>({
      query: ({el,q}) => `?sort=${el}&fields[server]=rank,name,players,maxPlayers,address,ip,port,country,location,details,status&relations[server]=game,serverGroup&filter[game]=rust&filter[search]=${q}`
    }),
    sortPlayer: builder.query<Root, det>({
      query: ({el,q}) => `?sort=${el}&fields[server]=rank,name,players,maxPlayers,address,ip,port,country,location,details,status&relations[server]=game,serverGroup&filter[game]=rust&filter[search]=${q}`
    }),
    sortName: builder.query<Root, det>({
      query: ({el,q}) => `?sort=${el}&fields[server]=rank,name,players,maxPlayers,address,ip,port,country,location,details,status&relations[server]=game,serverGroup&filter[game]=rust&filter[search]=${q}`
    }),
    Detail: builder.query<detail, string>({
      query: (id) => `/${id}?include=session,uptime:7,uptime:30,serverEvent,serverGroup,serverDescription,orgDescription&relations[server]=game,serverGroup,organization,orgGroup&relations[session]=server,player&fields[server]=id,name,address,ip,port,portQuery,players,maxPlayers,rank,createdAt,updatedAt,location,country,status,details,queryStatus&fields[session]=start,stop,firstTime,name&fields[orgDescription]=public,approvedAt`
    }),
  }),
})

export const {useSortRunkQuery,useDetailQuery,useSortNameQuery,useSortPlayerQuery} = api 