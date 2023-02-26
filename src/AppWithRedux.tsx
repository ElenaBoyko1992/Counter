import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import {CounterItem} from "./components/CounterItem";
import {SetParametersItem} from "./components/SetParametersItem";
import {Counter1} from "./Counter1";
import {Counter2} from "./Counter2";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch, useAppSelector} from "./state/store";
import {setIncreasedValueAC, setMaxValueAC, setStartValueAC, StateType} from "./state/counter-reducer";

function AppWithRedux() {

    const startValue = useAppSelector<number>(state => state.counter.startValue)
    const maxValue = useAppSelector<number>(state => state.counter.maxValue)
    const increasedValue = useAppSelector<number>(state => state.counter.increasedValue)

    const dispatch = useAppDispatch();

    const valuesOnChangeHandler = useCallback(() => {
        dispatch(setIncreasedValueAC(startValue))
    }, [dispatch, startValue])

    const maxValueHandler = useCallback((value: string) => {
        Number.isInteger(+value) && dispatch(setMaxValueAC(+value));
    }, [dispatch])

    const startValueHandler = useCallback((value: string) => {
        Number.isInteger(+value) && dispatch(setStartValueAC(+value));
    }, [dispatch])

    const increaseValueHandler = useCallback(() => {
        if (increasedValue <= maxValue - 1) {
            const newValue = increasedValue + 1
            dispatch(setIncreasedValueAC(newValue))
        }
    }, [increasedValue, maxValue, dispatch])
    const resetValue = useCallback(() => dispatch(setIncreasedValueAC(startValue)), [startValue, dispatch])

    return (
        <div className="App">
                                    <Counter1 valuesOnChangeHandler={valuesOnChangeHandler}
                      maxValueHandler={maxValueHandler}
                      startValueHandler={startValueHandler}
                      increaseValueHandler={increaseValueHandler}
                      resetValue={resetValue}/>

{/*            <Counter2 valuesOnChangeHandler={valuesOnChangeHandler}
                      maxValueHandler={maxValueHandler}
                      startValueHandler={startValueHandler}
                      increaseValueHandler={increaseValueHandler}
                      resetValue={resetValue}
            />*/}
        </div>
    );
}

export default AppWithRedux;


