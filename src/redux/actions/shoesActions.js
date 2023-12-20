import axios from "axios"
import { ADD_SHOES_FAIL, ADD_SHOES_SUCCESS, DELETE_SHOES_FAIL, DELETE_SHOES_SUCCESS, GET_SHOES_FAIL, GET_SHOES_SUCCESS, UPDATE_SHOES_FAIL, UPDATE_SHOES_SUCCESS } from "../constant/shoesConstant"
import { URL } from "../reduxStore"

export const addshoes = shoesData => {
    return async dispatch => {
        try {
            const { data } = await axios.post(URL, shoesData)
            dispatch({ type: ADD_SHOES_SUCCESS })
        } catch (error) {
            dispatch({ type: ADD_SHOES_FAIL, payload: error.message })
        }
    }
}

export const getshoes = shoesData => {
    return async dispatch => {
        try {
            const { data } = await axios.get(URL)
            dispatch({ type: GET_SHOES_SUCCESS, payload: data })
        } catch (error) {
            dispatch({ type: GET_SHOES_FAIL, payload: error.message })
        }
    }
}

export const deleteshoes = shoesData => {
    return async dispatch => {
        try {
            const { data } = await axios.delete(`${URL}/${shoesData}`)
            dispatch({ type: DELETE_SHOES_SUCCESS })
        } catch (error) {
            dispatch({ type: DELETE_SHOES_FAIL, payload: error.message })
        }
    }
}

export const updateshoes = shoesData => {
    return async dispatch => {
        try {
            const { data } = await axios.patch(`${URL}/${shoesData}`)
            dispatch({ type: UPDATE_SHOES_SUCCESS })
        } catch (error) {
            dispatch({ type: UPDATE_SHOES_FAIL, payload: error.message })
        }
    }
}

