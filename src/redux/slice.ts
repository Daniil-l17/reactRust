import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Data, detail } from "../types/TypeDetail";

  interface state {
    serverDetail: Data[],
    skinDetail: string
  }

  const initialState:state = {
    serverDetail: [],
    skinDetail: ''
  }

export const slice = createSlice({
  name: 'slicie',
  initialState,
  reducers: {
    addServerDetail: (state,{payload}:PayloadAction<detail>) => {
      if(payload){
        if(state.serverDetail?.some(el => el.id === payload.data.id))
        state.serverDetail = state?.serverDetail?.filter(el => el.id !== payload.data.id)
        else
      state.serverDetail?.unshift(payload.data)
      }
    },
    deleteServerDetail: (state,{payload}:PayloadAction<Data>) => {
        state.serverDetail = state.serverDetail.filter(el => el.id !== payload.id)
    },
    skinDetailAdd: (state, {payload}:PayloadAction<string>) => {
      state.skinDetail = payload
    }
  }
})


export const {actions,reducer} = slice