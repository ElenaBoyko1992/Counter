import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";

function App() {
    const [incValue, setIncValue] = useState<number>(0)

    const increaseValue = () => {
        if (incValue <= 4) {
            const newValue = incValue + 1
            /*  console.log(++incValue)*/
            setIncValue(newValue)
        }
    }
    const resetValue = () => setIncValue(0)


    return (
        <div className="App">
            <Counter incValue={incValue} increaseValue={increaseValue} resetValue={resetValue} maxValue={5}/>
        </div>
    );
}

export default App;
