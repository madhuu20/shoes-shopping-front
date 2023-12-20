import {
    ADD_SHOES_FAIL, ADD_SHOES_SUCCESS, DELETE_SHOES_FAIL, DELETE_SHOES_SUCCESS,
    GET_SHOES_FAIL, GET_SHOES_SUCCESS, UPDATE_SHOES_FAIL, UPDATE_SHOES_SUCCESS
} from "../constant/shoesConstant"

export const shoesReducer = (state = { shoes: [] }, { type, payload }) => {
    switch (type) {
        case ADD_SHOES_SUCCESS: return { ...state, shoesAdd: true }
        case ADD_SHOES_FAIL: return { ...state, error: payload }

        case GET_SHOES_SUCCESS: return { ...state, shoes: payload }
        case GET_SHOES_FAIL: return { ...state, error: payload }

        case DELETE_SHOES_SUCCESS: return { ...state, shoesdelete: true }
        case DELETE_SHOES_FAIL: return { ...state, error: payload }

        case UPDATE_SHOES_SUCCESS: return { ...state, error: payload }
        case UPDATE_SHOES_FAIL: return { ...state, error: payload }

        default: return state
    }
}


const userReducer = (state = { users: [] }, { type, payload }) => { }