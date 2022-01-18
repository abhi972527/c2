import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { authReducer } from '../auth/reducer'
import { GetAllReducer, jobReducer } from '../jobs/reducer'
import thunk from 'redux-thunk'
import { GetAllApplied } from '../applied/reducer'

const rootReducer = combineReducers({
    authState: authReducer,
    jobsState: jobReducer,
    getJobsState: GetAllReducer,
    appliedState: GetAllApplied
})

export const store = createStore(rootReducer, compose(applyMiddleware(thunk)))