import React from "react"
import s from './CounterItem.module.css'
import {Button} from "./Button";
import {ResultWindow} from "./ResultWindow";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";


type CounterPropsType = {
    increaseValueHandler: () => void
    resetValue: () => void
}

export const CounterItem = React.memo((props: CounterPropsType) => {

    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const increasedValue = useSelector<AppRootStateType, number>(state => state.counter.increasedValue)

    const equalityMaxAndIncreasedValue = increasedValue === maxValue
    const equalityIncreasedValueAndStartValue = increasedValue === startValue
    const maxValueLessOrEqualToStartValue = maxValue <= startValue

    return (
        <div className={s.counter}>
            <ResultWindow increasedValue={increasedValue} equalityMaxAndIncreasedValue={equalityMaxAndIncreasedValue}/>
            <div className={s.buttons}>
                <Button onClickHandler={props.increaseValueHandler}
                        disabled={equalityMaxAndIncreasedValue}>inc</Button>
                <Button onClickHandler={props.resetValue}
                        disabled={equalityIncreasedValueAndStartValue || maxValueLessOrEqualToStartValue}>reset</Button>
            </div>
        </div>
    );
})