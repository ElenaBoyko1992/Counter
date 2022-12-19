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
}

export const CounterItem = (props: CounterPropsType) => {

    return (
        <div className={s.counter}>
            <ResultWindow increasedValue={props.increasedValue} maxValue={props.maxValue}/>
            <div className={s.buttons}>
                <Button onClickHandler={props.increaseValue}
                        disabled={props.increasedValue === props.maxValue}>inc</Button>
                <Button onClickHandler={props.resetValue}
                        disabled={props.increasedValue === props.startValue || props.maxValue <= props.startValue}>reset</Button>
            </div>
        </div>
    );
}