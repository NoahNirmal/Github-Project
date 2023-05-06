export const GITHUB_USERS ="GITHUB_USERS"
export const GITHUB_USERDETAILS ="GITHUB_USERDETAILS"
export const GITHUB_USERREPOS ="GITHUB_USERREPOS"
export const TOGGLE_THEME ="TOGGLE_THEME"




export function githubusers(payload) {
    return{
        type :GITHUB_USERS,
        payload
    }
    
}

export function githubuserdetails(payload) {
    return{
        type :GITHUB_USERDETAILS,
        payload
    }
    
}
export function githubuserrepos(payload) {
    return{
        type :GITHUB_USERREPOS,
        payload
    }
    
}

export function toggletheme() {
    return{
        type :TOGGLE_THEME,
        
    }
    
}