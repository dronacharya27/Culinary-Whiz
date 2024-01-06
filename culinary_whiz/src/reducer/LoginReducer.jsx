import React from 'react'

const LoginReducer = (state,action) => {
    switch (action.type) {
        case 'handledata':
            const {name,value} = action.payload
            
            return {
                ...state,[name]:value
                
            }
            
            break;
    
        default:
            break;
    }
}

export default LoginReducer
