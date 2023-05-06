import { GITHUB_USERDETAILS, GITHUB_USERREPOS, GITHUB_USERS, TOGGLE_THEME } from "./action"

const initialState = {
    users:[],
    userdetails:[],
    userrepos:[],
    theme:false
}

export const reducer= (state = initialState, { type, payload }) => {
    if(type===GITHUB_USERS){
        // console.log(payload)

        return {...state, users:payload}
    }
    else  if(type===GITHUB_USERDETAILS){
        // console.log(payload)

        return {...state, userdetails:payload}
    }
   
    else  if(type===GITHUB_USERREPOS){
        // console.log(payload)

        return {...state, userrepos:payload}
    }

    else  if(type===TOGGLE_THEME){
        // console.log(payload)

        return {...state, theme:!state.theme}
    }
    else{
        return state
    }
  
}
