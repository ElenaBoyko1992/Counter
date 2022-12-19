import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterItem} from "./components/CounterItem";
import {SetParametersItem} from "./components/SetParametersItem";
import {Counter1} from "./Counter1";
import {Counter2} from "./Counter2";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {setIncreasedValueAC, setMaxValueAC, setStartValueAC, StateType} from "./state/counter-reducer";

function AppWithRedux() {

    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const increasedValue = useSelector<AppRootStateType, number>(state => state.counter.increasedValue)

    const dispatch = useDispatch();

    const valuesOnChangeHandler = () => {
        dispatch(setIncreasedValueAC(startValue))
    }

    const maxValueHandler = (value: string) => {
        Number.isInteger(+value) && dispatch(setMaxValueAC(+value));
    }

    const startValueHandler = (value: string) => {
        Number.isInteger(+value) && dispatch(setStartValueAC(+value));
    }

    const increaseValue = () => {
        if (increasedValue <= maxValue - 1) {
            const newValue = increasedValue + 1
            dispatch(setIncreasedValueAC(newValue))
        }
    }
    const resetValue = () => dispatch(setIncreasedValueAC(startValue))
    return (
        <div className="App">
            <Counter1 valuesOnChangeHandler={valuesOnChangeHandler}
                      maxValue={maxValue}
                      startValue={startValue}
                      maxValueHandler={maxValueHandler}
                      startValueHandler={startValueHandler}
                      increasedValue={increasedValue}
                      increaseValue={increaseValue}
                      resetValue={resetValue}
            />

            {/*<Counter2 valuesOnChangeHandler={valuesOnChangeHandler}*/}
            {/*          maxValue={maxValue}*/}
            {/*          startValue={startValue}*/}
            {/*          maxValueHandler={maxValueHandler}*/}
            {/*          startValueHandler={startValueHandler}*/}
            {/*          increasedValue={increasedValue}*/}
            {/*          increaseValue={increaseValue}*/}
            {/*          resetValue={resetValue}*/}
            {/*/>*/}
        </div>
    );
}

export default AppWithRedux;


