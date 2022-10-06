import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name:'user',
    initialState:{
        user:null     //here user data can be hold
    },
    reducers:{       //update out redux state
        login:(state,action)=>{   //action is data going to pass
            state.user = action.payload; //whaterver our content is stored on action.payload
        },
        logout:(state)=>{  //here we dont want action becouse w are not updating any data
            state.user=null;
        }
    }
})

export const {login,logout}=userSlice.actions;  //export the reducers

export const selectUser = (state)=>state.user.user; //its uses grab data from the redux in useSelector

export default userSlice.reducer;