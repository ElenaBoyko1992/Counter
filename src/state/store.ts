import {combineReducers, createStore, legacy_createStore} from "redux";
import {CounterActionsType, counterReducer} from "./counter-reducer";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {loadState, saveState} from "../utils/localStorage-utils";


const rootReducer = combineReducers({
    counter: counterReducer
})

//хуки
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// непосредственно создаём store
// loadState() - получить данные из localStorage
export const store = legacy_createStore(rootReducer, loadState());

//запись данных в localStorage
store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})

//types
// определить автоматически тип всего state
export type AppRootStateType = ReturnType<typeof rootReducer>
// создаем тип диспатча который принимает как AC так и TC
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AppActionsType>
//все типы экшенов для всего app
export type AppActionsType = CounterActionsType

// @ts-ignore
window.store = store;
