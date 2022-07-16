import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import gameReducer from '../features/games/gameSlice'

export const   store = configureStore({
    reducer:{
        games: gameReducer
    }
})

export type RooState= ReturnType<typeof store.getState>

export type AddDispatch=typeof store.dispatch

export const useAppDispatch=()=>useDispatch<AddDispatch>()
export const useAppSelector:TypedUseSelectorHook<RooState> = useSelector
