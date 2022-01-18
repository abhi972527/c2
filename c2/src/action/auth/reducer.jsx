import { Local, Data } from "../local/localStorage";
import { GET_USER } from "./actionTypes";


const init = {
    user: Local("user") || []
}

export const authReducer = (state = init, { type, payload }) => {
    switch (type) {

        case GET_USER:
            Data("user", [payload])
            return {
                user: [payload]
            }

        default:
            return state
    }
}
