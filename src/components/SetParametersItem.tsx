import React, {useState} from "react"
import s from './SetParametersItem.module.css'
import {Button} from "./Button";
import {ValueSettingWindow} from "./ValueSettingWindow";

type SetParametersWindowType = {
    valuesOnChangeHandler: () => void
    maxValue: number
    startValue: number
    maxValueHandler: (value: string) => void
    startValueHandler: (value: string) => void
}

export const SetParametersItem = (props: SetParametersWindowType) => {


    const valuesOnChangeHandler = () => {
        if ((props.startValue < props.maxValue)) {
            props.valuesOnChangeHandler()
        }
    }

    return (
        <div className={s.setParametersWindow}>
            <ValueSettingWindow maxValue={props.maxValue} startValue={props.startValue}
                                maxValueHandler={props.maxValueHandler}
                                startValueHandler={props.startValueHandler}

            />
            <div className={s.buttonWrapper}>
                <Button onClickHandler={valuesOnChangeHandler}>set</Button>
            </div>
        </div>
    );
}