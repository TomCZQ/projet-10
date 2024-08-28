import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: "",
    user: null,
    error: null,
    loading: false
}

const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.error= null;
            state.loading=true
        },

        loginSuccess: (state, action) => {
            state.token= action.payload.token;
            state.user= action.payload.user;
            state.error= null;
            state.loading= false;
        },

        loginFailure: (state, action) => {
            state.error= action.payload;
            state.loading= false;
        },

        fetchProfile: (state) => {
            
        },

        logout: (state) =>{
            state.token= false;
            state.user= null;
            state.error= null;
        },

        updateRequest: (state) => {
            state.error=null;
            state.loading=true;
        },
        updateFailed: (state, action) => {
            state.error= action.payload;
            state.loading= false;
        },

        updateSuccess: (state, action) => {
            state.user= {
                ...state.user,
                ...action.payload
            };
            state.loading=false;

        },

        signUpRequest: (state) => {
            state.error=null;
            state.loading=true;
            
        },

        signUpFailed: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

        signUpSuccess: (state, action) => {
            state.loading= false;
            state.user= action.payload;
            state.token= true;
        }

    }
});

export const { 
    loginStart, 
    loginFailure, 
    loginSuccess, 
    logout, 
    updateFailed, 
    updateRequest, 
    updateSuccess,
    signUpRequest,
    signUpFailed,
    signUpSuccess
} = userSlice.actions;

export default userSlice.reducer



