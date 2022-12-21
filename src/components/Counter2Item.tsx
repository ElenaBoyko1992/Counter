import React, {useCallback} from "react"
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

export const Counter2Item = React.memo((props: CounterPropsType) => {
    console.log("Counter2Item")
    const valuesOnChangeHandler = useCallback(() => {
        if ((props.startValue <= props.maxValue)) {
            props.valuesOnChangeHandler()
        }
    }, [props.startValue, props.maxValue, props.valuesOnChangeHandler])
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
})