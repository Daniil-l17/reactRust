import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {Data, detail } from "../types/TypeDetail";

  interface state {
    serverDetail: Data[]
  }

  const initialState:state = {
    serverDetail: []
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
      state.serverDetail?.push(payload.data)
      }
    },
    deleteServerDetail: (state,{payload}:PayloadAction<Data>) => {
        state.serverDetail = state.serverDetail.filter(el => el.id !== payload.id)
    }
  }
})


export const {actions,reducer} = slice