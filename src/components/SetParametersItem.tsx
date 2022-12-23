import React, {memo, useCallback, useState} from "react"
import s from './SetParametersItem.module.css'
import {Button} from "./Button";
import {ValueSettingWindow} from "./ValueSettingWindow";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

type SetParametersWindowType = {
    valuesOnChangeHandler: () => void
    maxValueHandler: (value: string) => void
    startValueHandler: (value: string) => void
}

export const SetParametersItem = React.memo((props: SetParametersWindowType) => {

    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)

    const startValueLessOrEqualThanMaxValue = startValue <= maxValue
    const startValueMoreOrEqualToZero = startValue >= 0

    const valuesOnChangeHandler = useCallback(() => {
        if (startValueLessOrEqualThanMaxValue && startValueMoreOrEqualToZero) {
            props.valuesOnChangeHandler()
        }
    }, [startValue, maxValue, props.valuesOnChangeHandler])

    return (
        <div className={s.setParametersWindow}>
            <ValueSettingWindow maxValue={maxValue} startValue={startValue}
                                maxValueHandler={props.maxValueHandler}
                                startValueHandler={props.startValueHandler}

            />
            <div className={s.buttonWrapper}>
                <Button onClickHandler={valuesOnChangeHandler}>set</Button>
            </div>
        </div>
    );
})