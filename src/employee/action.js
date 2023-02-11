import axios from 'axios';
import {GET_EMPLOYEE_DETAIL,GET_EMPLOYEE_BY_ID} from './config';
const {REACT_APP_API_BASE_URL} = process.env 

export const getEmployeeDetails = () =>{
    return (dispatch) =>{
        axios.get(`${REACT_APP_API_BASE_URL}/employee`)
        .then((response) =>{
            dispatch({
                type:GET_EMPLOYEE_DETAIL,
                payload:response.data
            })
        })
    }
}

export const getEmployeeById = (id) => {
    return (dispatch) => {
        axios.get(`${REACT_APP_API_BASE_URL}/employee/${id}`)
        .then((response) =>{
            dispatch({
                type:GET_EMPLOYEE_BY_ID,
                payload:response.data
            })
        })
    }
}

export const insertEmployee = (data) =>{
    return (dispatch) => {
        axios.post(`${REACT_APP_API_BASE_URL}/employee`,data)
        .then((resopnse) =>{
            dispatch(getEmployeeDetails())
        })
    }
}

export const updateEmployee = (empId,data) =>{
    return (dispatch) => {
        axios.put(`${REACT_APP_API_BASE_URL}/employee/${empId}`,data)
        .then((resopnse) =>{
            dispatch(getEmployeeDetails())
        })
    }
}

export const deleteEmployee = (empId) =>{
    return (dispatch) => {
        axios.delete(`${REACT_APP_API_BASE_URL}/employee/${empId}`)
        .then((resopnse) =>{
            dispatch(getEmployeeDetails())
        })
    }
}