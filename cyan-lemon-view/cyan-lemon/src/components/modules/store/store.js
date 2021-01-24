import { applyMiddleware, createStore } from 'redux';
// import reducer from './reducer'
import thunk from 'redux-thunk'
// import { createAction } from 'redux-actions';
// const startAction = createAction('START');
const stateDefault = {
    product: []
}

const reducers = function(state=stateDefault, action) {
    switch(action.type) {
        case 'SEARCH': state.product = action.payload; break;
        default:
    }
    return state
}
const store = createStore(reducers, applyMiddleware(thunk))
store.subscribe(() => {})
export default store