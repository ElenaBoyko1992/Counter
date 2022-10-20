import React, {ChangeEvent, useState} from "react"
import s from './SetParametersWindow.module.css'
import {Button} from "./Button";

type SetParametersWindowType = {
    valuesOnChangeHandler: (startValue: number, maxValue: number) => void
}

export const SetParametersWindow = (props: SetParametersWindowType) => {
/*    const [maxValue, setMaxValue] = useState('');
    const [startValue, setStartValue] = useState('');*/
    const [maxValueFieldError, setMaxValueFieldError] = useState<boolean>(false)
    const [startValueFieldError, setStartValueFieldError] = useState<boolean>(false)

    const valuesOnChangeHandler = () => {
        if ((+startValue <= +maxValue) && (startValue !== '') && (maxValue !== '')) {
            props.valuesOnChangeHandler(+startValue, +maxValue)
        } else if ((+startValue > +maxValue) && (startValue !== '') && (maxValue !== '')) {
            alert('The initial value must be less than the maximum value. Please enter correct values.');
            setStartValue('');
            setMaxValue('');
        } else if (!+maxValue || !+startValue) {
            !+maxValue && setMaxValueFieldError(true);
            !+startValue && setStartValueFieldError(true);
        } else {
            setMaxValueFieldError(true);
            setStartValueFieldError(true);
        }
    }
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.currentTarget.value)
        maxValueFieldError && setMaxValueFieldError(false)
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(e.currentTarget.value);
        startValueFieldError && setStartValueFieldError(false)
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
                </div>
                {maxValueFieldError ? <span className={s.errorText}>Please, enter a correct value!</span> : ''}
                <div className={s.valueParams}>
                    <span>start value:</span>
                    <input value={startValue}
                           className={startValueFieldError ? `${s.error} ${s.input}` : s.input}
                           onChange={startValueHandler}
                    />
                </div>
                {startValueFieldError ? <span className={s.errorText}>Please, enter a correct value!</span> : ''}
            </div>
            <div className={s.buttonWrapper}>
                <Button onClickHandler={valuesOnChangeHandler}>set</Button>
            </div>
        </div>
    );
}