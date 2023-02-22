// select dom elements
let incrementEl = document.getElementById("increment")
let decrementEl = document.getElementById("decrement")
let counterEl = document.getElementById("counter")

// initial state
const initialState = {
    value: 0
}

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            value: state.value + 1
        }
    } else if (action.type === 'decrement') {
        return {
            ...state,
            value: state.value - 1
        }
    } else {
        return state;
    }
}

// create store
const store = Redux.createStore(counterReducer)


function render() {
    const state = store.getState();
    counterEl.innerText = state.value.toString();
}
// update UI initially
render()

store.subscribe(render)


// button click listeners

incrementEl.addEventListener("click", () => {
    store.dispatch({
        type: 'increment'
    })
})


decrementEl.addEventListener("click", () => {
    store.dispatch({
        type: 'decrement'
    })
})