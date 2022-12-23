import {SetParametersItem} from "./components/SetParametersItem";
import React from "react";
import {CounterItem} from "./components/CounterItem";

export type CounterType = {
    valuesOnChangeHandler: () => void
    maxValueHandler: (value: string) => void
    startValueHandler: (value: string) => void
    increaseValueHandler: () => void
    resetValue: () => void
}

export const Counter1 = React.memo((props: CounterType) => {

    return (
        <>
            <SetParametersItem valuesOnChangeHandler={props.valuesOnChangeHandler}
                               maxValueHandler={props.maxValueHandler}
                               startValueHandler={props.startValueHandler}/>
            <CounterItem increaseValueHandler={props.increaseValueHandler}
                         resetValue={props.resetValue}/>
        </>
    )
})

