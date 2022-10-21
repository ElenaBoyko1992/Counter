import React from "react"
import s from './CounterItem.module.css'
import {Button} from "./Button";
import {ResultWindow} from "./ResultWindow";


type CounterPropsType = {
    increasedValue: number
    increaseValue: () => void
    resetValue: () => void
    maxValue: number
    startValue: number
    valuesOnChangeHandler: () => void
}

export const Counter2Item = (props: CounterPropsType) => {
    const valuesOnChangeHandler = () => {
        if ((props.startValue < props.maxValue)) {
            props.valuesOnChangeHandler()
        } /*else {
            /!*alert('The initial value must be less than the maximum value. Please enter correct values.');*!/
            setError(true)
        }*/
    }
    return (
        <div className={s.counter}>
            <ResultWindow increasedValue={props.increasedValue} maxValue={props.maxValue}/>
            <div className={s.buttons}>
                <Button onClickHandler={props.increaseValue}
                        disabled={props.increasedValue === props.maxValue}>inc</Button>
                <Button onClickHandler={props.resetValue}
                        disabled={props.increasedValue === props.startValue}>reset</Button>
                <Button onClickHandler={valuesOnChangeHandler}>set</Button>
            </div>
        </div>
    );
}