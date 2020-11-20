import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {locationReducer} from './reducers'

export const store = createStore(
    locationReducer,
    applyMiddleware(thunk)
)

