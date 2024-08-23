import axios from "axios";
import { loginFailure, loginStart, loginSuccess, signUpFailed, signUpRequest, signUpSuccess, updateFailed, updateRequest, updateSuccess } from "./slices/userSlice";


export const loginUser = async (credentials, dispatch) => {
    dispatch(loginStart());
    try{
        const response = await axios.post('http://localhost:3001/api/v1/user/login', credentials);
        
        if(credentials.rememberMe === true){localStorage.setItem("token", response.data.body.token)}
        loginSuccess(response.data.body.user)
        getProfile(response.data.body.token, dispatch)
        }
    catch(error){
        dispatch(loginFailure(error.response?.data?.message || 'La connexion a échoué'))
    }
}

export const getProfile = async (token, dispatch) => {
    dispatch(loginStart());
    try{
        const response = await axios.post('http://localhost:3001/api/v1/user/profile', null, {headers: {Authorization: "Bearer "+token}});
        dispatch(loginSuccess({user: response.data.body, token}));
        
        }
    catch(error){
        dispatch(loginFailure(error.response?.data?.message || 'La connexion a échoué'))
    }
}

export const updateUser = (username) => async (dispatch) => {
    dispatch(updateRequest());
    try{
        const response = await axios.put('/api/v1/user/profile', username)
        dispatch(updateSuccess(response.data));
    }
    catch(error){
        dispatch(updateFailed(error.response?.data?.message || "La mise à jour du profile a échoué"))
    }
}

export const signUpUser = (user) => async (dispatch) => {
    dispatch(signUpRequest());
    try{
        const response = await axios.post('/api/v1/user/signup', user)
        dispatch(signUpSuccess(response.data))
    }
    catch(error){
        dispatch(signUpFailed(error.response?.data?.message || "La création du compte a échoué"))
    }
}
