import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetParametersWindow} from "./components/SetParametersWindow";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [increasedValue, setIncreasedValue] = useState<number>(startValue)

    const valuesOnChangeHandler = (startValue: number, maxValue: number) => {
        setStartValue(startValue);
        setMaxValue(maxValue);
        setIncreasedValue(startValue)
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
    }, [startValue]) //коллбэк сработает каждый раз после изменения value

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue]) //коллбэк сработает каждый раз после изменения value

    useEffect(() => {
        localStorage.setItem('increasedValue', JSON.stringify(increasedValue))
    }, [increasedValue]) //коллбэк сработает каждый раз после изменения value



    return (
        <div className="App">
            <SetParametersWindow valuesOnChangeHandler={valuesOnChangeHandler}/>
            <Counter increasedValue={increasedValue} increaseValue={increaseValue} resetValue={resetValue}
                     maxValue={maxValue} startValue={startValue}
            />
        </div>
    );
}

export default App;
