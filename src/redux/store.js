import { createStore } from 'redux';

function counter(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

const store = createStore(counter);

store.subscribe(() => console.log('хранилище 1',store.getState()))

console.log(store.getState())

store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/incremented' })

export default store