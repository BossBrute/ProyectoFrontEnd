import {ACTION_LOGIN, ACTION_LOGOUT, ACTION_MODIFYNAME} from "../actions/authActions.js";

const initialState = {
    CorrectLog: false,
    //userType: 0, -Next Update implement in 1.2 + DLC
    //0 - NotLogged , 1 - Student , 2 - Profesor , 3 -  Attorney
    userName: null,
    userRUT: null,
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_LOGIN:
            return{
                ...state,
                ...action.payload,
            };
        case ACTION_LOGOUT:
            return{
                ...state,
                ...action.payload,
            };
        case ACTION_MODIFYNAME:
            return{
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}
export default authReducer;