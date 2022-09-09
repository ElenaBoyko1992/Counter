import React, {useState} from "react"
import s from './Counter.module.css'
import {Button} from "./Button";


type CounterPropsType = {
    incValue: number
    increaseValue: () => void
    resetValue: () => void
    maxValue: number
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className={s.counter}>
            <div className={props.incValue === props.maxValue ? `${s.incWindow} ${s.red}` : s.incWindow}>{props.incValue}</div>
            <div className={s.buttons}>
                <Button onClickHandler={props.increaseValue} disabled={props.incValue === props.maxValue}>inc</Button>
                <Button onClickHandler={props.resetValue} disabled={props.incValue === 0}>reset</Button>
            </div>
        </div>
    );
}