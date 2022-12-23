import React, {useCallback} from "react"
import s from './CounterItem.module.css'
import {Button} from "./Button";
import {ResultWindow} from "./ResultWindow";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";


type CounterPropsType = {
    increaseValueHandler: () => void
    resetValue: () => void
    valuesOnChangeHandler: () => void
}

export const Counter2Item = React.memo((props: CounterPropsType) => {

    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const increasedValue = useSelector<AppRootStateType, number>(state => state.counter.increasedValue)

    const equalityMaxAndIncreasedValue = increasedValue === maxValue

    const valuesOnChangeHandler = useCallback(() => {
        if ((startValue <= maxValue)) {
            props.valuesOnChangeHandler()
        }
    }, [startValue, maxValue, props.valuesOnChangeHandler])
    return (
        <div className={s.counter}>
            <ResultWindow increasedValue={increasedValue}
                          equalityMaxAndIncreasedValue={equalityMaxAndIncreasedValue}/>
            <div className={s.buttons}>
                <Button onClickHandler={props.increaseValueHandler}
                        disabled={increasedValue === maxValue}>inc</Button>
                <Button onClickHandler={props.resetValue}
                        disabled={increasedValue === startValue}>reset</Button>
                <Button onClickHandler={valuesOnChangeHandler}>set</Button>
            </div>
        </div>
    );
})