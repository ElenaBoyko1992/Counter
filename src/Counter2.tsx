import {SetParametersItem} from "./components/SetParametersItem";
import React, {useCallback, useState} from "react";
import {Counter2Item} from "./components/Counter2Item";
import {CounterType} from "./Counter1";


export const Counter2 = React.memo((props: CounterType) => {

    const [counterWindowIsOpen, setCounterWindowIsOpen] = useState(false)

    const valuesOnChangeHandler = useCallback(() => {
        props.valuesOnChangeHandler()
        setCounterWindowIsOpen(!counterWindowIsOpen)
    }, [props.valuesOnChangeHandler, setCounterWindowIsOpen, counterWindowIsOpen])

    return (
        <>
            {counterWindowIsOpen ?
                <Counter2Item increaseValueHandler={props.increaseValueHandler}
                              resetValue={props.resetValue}
                              valuesOnChangeHandler={valuesOnChangeHandler}/>
                :
                <SetParametersItem valuesOnChangeHandler={valuesOnChangeHandler}
                                   maxValueHandler={props.maxValueHandler}
                                   startValueHandler={props.startValueHandler}/>}
        </>
    )
})

