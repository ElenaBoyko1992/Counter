import React, {ButtonHTMLAttributes, DetailedHTMLProps, useState} from "react"
import s from './Button.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    onClickHandler: () => void
    disabled?: boolean
}

export const Button = (props: ButtonPropsType) => {

    const finalClassName = props.className ? `${s.button} ${props.className}` : s.button

    return (
        <button onClick={props.onClickHandler} className={finalClassName} disabled={props.disabled}>{props.children}</button>
    );
}