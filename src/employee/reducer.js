import {GET_EMPLOYEE_BY_ID, GET_EMPLOYEE_DETAIL} from './config';

const initialstate = {
    employeeDetails:[],
    employeeDetail:[]
}

const reducer = (state=initialstate, action) =>{
    switch(action.type){
        case GET_EMPLOYEE_DETAIL:
            return {
                ...state,
                employeeDetails: action.payload
            }
        case GET_EMPLOYEE_BY_ID:
            return {
                ...state,
                employeeDetail:action.payload
            }
        default:
            return state;
    }
}

export default reducer;
