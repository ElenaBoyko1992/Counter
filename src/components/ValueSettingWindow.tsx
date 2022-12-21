import s from "./SetParametersItem.module.css";
import React, {ChangeEvent, useEffect, useState} from "react";

type ValueSettingWindowType = {
    maxValue: number
    startValue: number
    maxValueHandler: (value: string) => void
    startValueHandler: (value: string) => void
}
const ERROR_MESSAGE = 'Enter a correct value!'

export const ValueSettingWindow = React.memo((props: ValueSettingWindowType) => {
    console.log("ValueSettingWindow")
    const [maxValueError, setMaxValueError] = useState(false);
    const [startValueError, setStartValueError] = useState(false);

    useEffect(() => {
        if (props.maxValue < 0 || props.maxValue < props.startValue) {
            setMaxValueError(true)
        } else {
            setMaxValueError(false)
        }
    }, [props.maxValue, props.startValue])
    useEffect(() => {
        if (props.startValue < 0) {
            setStartValueError(true)
        } else {
            setStartValueError(false)
        }
    }, [props.startValue, props.maxValue])


    const ChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.maxValueHandler(e.currentTarget.value)
    }
    const ChangeStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        props.startValueHandler(e.currentTarget.value);
    }
    return (
        <>
            <div className={s.wrapperValueParams}>
                <div className={s.valueParams}>
                    <span>max value:</span>
                    <input type={"number"}
                           value={props.maxValue}
                           onChange={ChangeMaxValue}
                           className={maxValueError ? `${s.input} ${s.error}` : s.input}
                    />
                    {maxValueError && <span className={s.errorMessage}>{ERROR_MESSAGE}</span>}
                </div>
                <div className={s.valueParams}>
                    <span>start value:</span>
                    <input type={"number"}
                           value={props.startValue}
                           className={startValueError ? `${s.input} ${s.error}` : s.input}
                           onChange={ChangeStartValue}
                    />
                    {startValueError && <span className={s.errorMessage}>{ERROR_MESSAGE}</span>}
                </div>
            </div>
        </>
    )
})