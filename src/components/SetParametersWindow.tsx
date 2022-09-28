import React, {ChangeEvent, useState} from "react"
import s from './SetParametersWindow.module.css'
import {Button} from "./Button";

type SetParametersWindowType = {
    valuesOnChangeHandler: (startValue: any, maxValue: any) => void
}

export const SetParametersWindow = (props: SetParametersWindowType) => {
    const [maxValue, setMaxValue] = useState('');
    const [startValue, setStartValue] = useState('');
    const [maxValueFieldError, setMaxValueFieldError] = useState<boolean>(false)
    const [startValueFieldError, setStartValueFieldError] = useState<boolean>(false)

    const valuesOnChangeHandler = () => {
        if (+startValue && +maxValue) {
            props.valuesOnChangeHandler(+startValue, +maxValue)
        } else {
            setMaxValueFieldError(!+maxValue);
            setStartValueFieldError(!+startValue);
        }
    }
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value)
    }

    return (
        <div className={s.setParametersWindow}>
            <div className={s.wrapperValueParams}>
                <div className={s.valueParams}>
                    <span>max value:</span>
                    <input value={maxValue}
                           onChange={maxValueHandler}
                           className={maxValueFieldError ? `${s.error} ${s.input}` : s.input}
                    />
                    {maxValueFieldError ? 'Please, enter a number!' : ''}
                </div>
                <div className={s.valueParams}>
                    <span>start value:</span>
                    <input value={startValue}
                           className={startValueFieldError ? `${s.error} ${s.input}` : s.input}
                           onChange={startValueHandler}
                    />
                </div>
            </div>
            <div className={s.buttonWrapper}>
                <Button onClickHandler={valuesOnChangeHandler}>set</Button>
            </div>
        </div>
    );
}