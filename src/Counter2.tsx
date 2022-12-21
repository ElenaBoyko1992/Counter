import {SetParametersItem} from "./components/SetParametersItem";
import React, {useCallback, useState} from "react";
import {CounterItem} from "./components/CounterItem";
import {Counter2Item} from "./components/Counter2Item";

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

export const Counter2 = React.memo((props: Counter1Type) => {
    console.log("Counter2")
    const [counterWindowIsOpen, setCounterWindowIsOpen] = useState(false)

    const valuesOnChangeHandler = useCallback(() => {
        props.valuesOnChangeHandler()
        setCounterWindowIsOpen(!counterWindowIsOpen)
    }, [props.valuesOnChangeHandler, setCounterWindowIsOpen, counterWindowIsOpen])

    return (
        <>
            {counterWindowIsOpen ?
                <Counter2Item increasedValue={props.increasedValue} increaseValue={props.increaseValue}
                              resetValue={props.resetValue}
                              maxValue={props.maxValue} startValue={props.startValue}
                              valuesOnChangeHandler={valuesOnChangeHandler}/>
                :
                <SetParametersItem valuesOnChangeHandler={valuesOnChangeHandler} maxValue={props.maxValue}
                                   startValue={props.startValue}
                                   maxValueHandler={props.maxValueHandler}
                                   startValueHandler={props.startValueHandler}/>}
        </>
    )
})

