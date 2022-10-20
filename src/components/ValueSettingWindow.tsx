import s from "./SetParametersItem.module.css";
import React, {ChangeEvent} from "react";

type ValueSettingWindowType = {
    maxValue: number
    startValue: number
    maxValueHandler: (value: string) => void
    startValueHandler: (value: string) => void
}

export const ValueSettingWindow = (props: ValueSettingWindowType) => {
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
                    <input value={props.maxValue}
                           onChange={ChangeMaxValue}
                           className={s.input}
                    />
                </div>
                <div className={s.valueParams}>
                    <span>start value:</span>
                    <input value={props.startValue}
                           className={s.input}
                           onChange={ChangeStartValue}
                    />
                </div>
            </div>
        </>
    )
}