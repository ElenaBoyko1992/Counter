import React, {useState} from "react"
import s from './Counter.module.css'
import {Button} from "./Button";
import {ResultWindow} from "./ResultWindow";


type CounterPropsType = {
    increasedValue: number
    increaseValue: () => void
    resetValue: () => void
    maxValue: number
    startValue: number
}

export const Counter = (props: CounterPropsType) => {

    return (
        <div className={s.counter}>
            {/* <div className={props.increasedValue === props.maxValue ? `${s.incWindow} ${s.red}` : s.incWindow}>{props.increasedValue}</div>*/}
            <ResultWindow increasedValue={props.increasedValue} maxValue={props.maxValue}/>
            <div className={s.buttons}>
                <Button onClickHandler={props.increaseValue}
                        disabled={props.increasedValue === props.maxValue}>inc</Button>
                <Button onClickHandler={props.resetValue}
                        disabled={props.increasedValue === props.startValue}>reset</Button>
            </div>
        </div>
    );
}