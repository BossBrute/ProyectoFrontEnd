export const ACTION_LOGIN = "ACTION_LOGIN";
export const ACTION_LOGOUT = "ACTION_LOGOUT";
export const ACTION_MODIFYNAME = "ACTION_MODIFYNAME";

export const login = (datos) => {
    return {
        type: ACTION_LOGIN,
        payload: {
            CorrectLog: true,
            //userType: datos.tipo,
            userName: datos.nombre,
            userRUT: datos.rut,
        }
    }
}

export const logout = () => {
    return {
        type: ACTION_LOGOUT,
        payload: {
            isLogged: false,
            //userType: 0,
            userName: null,
            userRUT: null,
        }
    }
}

export const modifyName = (datos) => {
    return {
        type: ACTION_MODIFYNAME,
        payload: {
            userName: datos.name,
        }
    }
}