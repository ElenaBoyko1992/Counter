
const initialState: StateType = {
    startValue: 0,
    maxValue: 0,
    increasedValue: 0
}

export const counterReducer = (state = initialState, action: CounterActionsType): StateType => {
    switch (action.type) {
        case 'SET-INCREASED-VALUE': {
            return {
                ...state,
                increasedValue: action.value
            }
        }
        case 'SET-MAX-VALUE': {
            return {
                ...state,
                maxValue: action.maxValue
            }
        }
        case 'SET-START-VALUE': {
            return {
                ...state,
                startValue: action.startValue
            }
        }
        default:
            return state;
    }
}

//AC
export const setIncreasedValueAC = (value: number) => ({type: 'SET-INCREASED-VALUE', value} as const)
export const setMaxValueAC = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)
export const setStartValueAC = (startValue: number) => ({type: 'SET-START-VALUE', startValue} as const)

//types
export type StateType = {
    startValue: number
    maxValue: number
    increasedValue: number
}

type setIncreasedValueAT = ReturnType<typeof setIncreasedValueAC>
type setMaxValueAT = ReturnType<typeof setMaxValueAC>
type setStartValueAT = ReturnType<typeof setStartValueAC>

export type CounterActionsType = setIncreasedValueAT | setMaxValueAT | setStartValueAT
