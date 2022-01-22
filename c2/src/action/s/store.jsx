import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { authReducer } from '../authcontroller/authreducer'
import { GetAllReducer, jobReducer } from '../jobscontroller/jobsreducer'
import thunk from 'redux-thunk'
import { GetAllApplied } from '../appliedcontroller/applyReducer'

const rootReducer = combineReducers({
    authState: authReducer,
    jobsState: jobReducer,
    getJobsState: GetAllReducer,
    appliedState: GetAllApplied
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))