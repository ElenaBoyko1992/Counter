import React from "react";
import s from './ResultWindow.module.css'

type ResultWindowType = {
    increasedValue: number
    maxValue: number
}

export const ResultWindow = (props: ResultWindowType)=> {
    return (
        <div className={props.increasedValue === props.maxValue ? `${s.incWindow} ${s.red}` : s.incWindow}>{props.increasedValue}</div>
    )
}