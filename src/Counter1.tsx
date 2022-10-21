import {SetParametersItem} from "./components/SetParametersItem";
import React from "react";
import {CounterItem} from "./components/CounterItem";

type Counter1Type = {
    valuesOnChangeHandler: () => void
    maxValue: number
    startValue: number
    maxValueHandler: (value: string) => void
    startValueHandler: (value: string) => void
    increasedValue: number
    increaseValue: () => void
    resetValue: () => void
}

export const Counter1 = (props: Counter1Type) => {
    return (
        <>
            <SetParametersItem valuesOnChangeHandler={props.valuesOnChangeHandler} maxValue={props.maxValue}
                               startValue={props.startValue}
                               maxValueHandler={props.maxValueHandler}
                               startValueHandler={props.startValueHandler}/>
            <CounterItem increasedValue={props.increasedValue} increaseValue={props.increaseValue} resetValue={props.resetValue}
                         maxValue={props.maxValue} startValue={props.startValue}/>
        </>
    )
}

