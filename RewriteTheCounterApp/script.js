// select dom elements
let incrementEl = document.getElementById("increment")
let decrementEl = document.getElementById("decrement")
let counterEl = document.getElementById("counter")

//action identifiers

const INCREMENT = "increment"
const DECREMENT = "decrement"


//action creators

function increment(value) {
    return {
        type: INCREMENT,
        payload: value
    }
}

function decrement(value) {
    return {
        type: DECREMENT,
        payload: value
    }
}


// initial state
const initialState = {
    value: 0
}

// create reducer function
function counterReducer(state = initialState, action) {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + action.payload
        }
    } else if (action.type === DECREMENT) {
        return {
            ...state,
            value: state.value - action.payload
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
    store.dispatch(increment(5))
})


decrementEl.addEventListener("click", () => {
    store.dispatch(decrement(2))
})