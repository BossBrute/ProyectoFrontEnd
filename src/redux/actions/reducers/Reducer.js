import {ACTION_LOGIN, ACTION_LOGOUT, ACTION_MODIFYNAME} from "../actions/Actions.js";

const initialState = {
    isLogged: false,
    userType: 0,
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