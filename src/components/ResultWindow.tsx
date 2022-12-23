import React from "react";
import s from './ResultWindow.module.css'

type ResultWindowType = {
    increasedValue: number
    equalityMaxAndIncreasedValue: boolean
}

export const ResultWindow = React.memo((props: ResultWindowType)=> {

    return (
        <div className={props.equalityMaxAndIncreasedValue ? `${s.incWindow} ${s.red}` : s.incWindow}>{props.increasedValue}</div>
    )
})