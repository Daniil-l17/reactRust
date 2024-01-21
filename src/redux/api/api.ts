import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Root } from "../../types/Type";
import { detail } from "../../types/TypeDetail";
import { detailTypePopular } from "../../types/TypeMostPopular";

  const API_BASE = 'https://api.battlemetrics.com/servers'


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE
  }),
  refetchOnFocus: true,
  endpoints: (builder) => ({
    sortRunk: builder.query<Root, string>({
      query: (el) => `${el}`
    }),
    sortPlayer: builder.query<Root, string>({
      query: (el) => `${el}`
    }),
    sortName: builder.query<Root, string>({
      query: (el) => `${el}`
    }),
    Detail: builder.query<detail, string>({
      query: (id) => `/${id}?include=session,uptime:7,uptime:30,serverEvent,serverGroup,serverDescription,orgDescription&relations[server]=game,serverGroup,organization,orgGroup&relations[session]=server,player&fields[server]=id,name,address,ip,port,portQuery,players,maxPlayers,rank,createdAt,updatedAt,location,country,status,details,queryStatus&fields[session]=start,stop,firstTime,name&fields[orgDescription]=public,approvedAt`
    }),
    mostPopularSkin: builder.query<detailTypePopular, null>({
      query: () => 'https://totalrust.com/api/landing'
    })
  }),
})

export const {useDetailQuery,useLazySortNameQuery,useLazySortPlayerQuery,useLazySortRunkQuery, useMostPopularSkinQuery} = api 