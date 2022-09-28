import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {SetParametersWindow} from "./components/SetParametersWindow";

function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(0)
    const [increasedValue, setIncValue] = useState<number>(startValue)

    const valuesOnChangeHandler = (startValue: any, maxValue: any) => {
        setStartValue(startValue);
        setMaxValue(maxValue);
        setIncValue(startValue)
    }

    const increaseValue = () => {
        if (increasedValue <= maxValue - 1) {
            const newValue = increasedValue + 1
            setIncValue(newValue)
        }
    }
    const resetValue = () => setIncValue(startValue)


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
