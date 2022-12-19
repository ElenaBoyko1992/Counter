import {counterReducer, setIncreasedValueAC, setMaxValueAC, setStartValueAC, StateType} from "./counter-reducer";

let startState: StateType;
beforeEach(() => {
    startState = {
        startValue: 0,
        maxValue: 0,
        increasedValue: 0
    };
});

test('increasedValue should be changed', () => {
    const action = setIncreasedValueAC(2);

    const endState = counterReducer(startState, action)

    expect(endState.increasedValue).toBe(2);
    expect(endState.startValue).toBe(0);
    expect(endState.maxValue).toBe(0);
});

test('maxValue should be changed', () => {
    const action = setMaxValueAC(4);

    const endState = counterReducer(startState, action)

    expect(endState.increasedValue).toBe(0);
    expect(endState.startValue).toBe(0);
    expect(endState.maxValue).toBe(4);
});

test('startValue should be changed', () => {
    const action = setStartValueAC(7);

    const endState = counterReducer(startState, action)

    expect(endState.increasedValue).toBe(0);
    expect(endState.startValue).toBe(7);
    expect(endState.maxValue).toBe(0);
});