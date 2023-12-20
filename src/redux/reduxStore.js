import { createStore, combineReducers, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { shoesReducer } from "./reducers/shoesReducers"

const rootReducer = combineReducers({
    sneakers: shoesReducer
})

export const URL = "https://shoes-shopping-backend.onrender.com/shoes"

const reduxStore = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)))

export default reduxStore
