import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: "counter1",
    initialState: {
        value: 100,
        counter: 10,
        name: 'Raj'
    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement(state) {
            state.value = state.value + 1;
        },
        updateName(state, action) {
            console.log(state);
            console.log(action);
            state.name = action.payload.name;
        }
    }
});

export const { increment, decrement, updateName } = counterSlice.actions;

export default counterSlice.reducer;