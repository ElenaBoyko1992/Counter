import React, {useEffect, useState} from 'react';
import './App.css';
import {CounterItem} from "./components/CounterItem";
import {SetParametersItem} from "./components/SetParametersItem";
import {Counter1} from "./Counter1";
import {Counter2} from "./Counter2";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [increasedValue, setIncreasedValue] = useState<number>(startValue)

    const valuesOnChangeHandler = () => {
        setIncreasedValue(startValue)
    }

    const maxValueHandler = (value: string) => {
        Number.isInteger(+value) && setMaxValue(+value);
    }

    const startValueHandler = (value: string) => {
        Number.isInteger(+value) && setStartValue(+value);
    }

    const increaseValue = () => {
        if (increasedValue <= maxValue - 1) {
            const newValue = increasedValue + 1
            setIncreasedValue(newValue)
        }
    }
    const resetValue = () => setIncreasedValue(startValue)

    //получение данных из localstorage
    useEffect(() => {
        let valueAsAString = localStorage.getItem('startValue')
        if (valueAsAString) {
            let newValue = JSON.parse(valueAsAString)
            setStartValue(+newValue)
        }
    }, []); //коллбэк сработает единожды (при перезагрузке страницы)

    useEffect(() => {
        let valueAsAString = localStorage.getItem('maxValue')
        if (valueAsAString) {
            let newValue = JSON.parse(valueAsAString)
            setMaxValue(+newValue)
        }
    }, []); //коллбэк сработает единожды (при перезагрузке страницы)

    useEffect(() => {
        let valueAsAString = localStorage.getItem('increasedValue')
        if (valueAsAString) {
            let newValue = JSON.parse(valueAsAString)
            setIncreasedValue(+newValue)
        }
    }, []); //коллбэк сработает единожды (при перезагрузке страницы)

    //запись в localstorage
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue]) //коллбэк сработает каждый раз после изменения startValue

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue]) //коллбэк сработает каждый раз после изменения maxValue

    useEffect(() => {
        localStorage.setItem('increasedValue', JSON.stringify(increasedValue))
    }, [increasedValue]) //коллбэк сработает каждый раз после изменения increasedValue


    return (
        <div className="App">
            <Counter1 valuesOnChangeHandler={valuesOnChangeHandler}
                      maxValue={maxValue}
                      startValue={startValue}
                      maxValueHandler={maxValueHandler}
                      startValueHandler={startValueHandler}
                      increasedValue={increasedValue}
                      increaseValue={increaseValue}
                      resetValue={resetValue}
            />

{/*                        <Counter2 valuesOnChangeHandler={valuesOnChangeHandler}
                      maxValue={maxValue}
                      startValue={startValue}
                      maxValueHandler={maxValueHandler}
                      startValueHandler={startValueHandler}
                      increasedValue={increasedValue}
                      increaseValue={increaseValue}
                      resetValue={resetValue}
            />*/}
        </div>
    );
}

export default App;


