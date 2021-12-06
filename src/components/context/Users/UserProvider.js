import React, { useState } from 'react'
import{ createContext, useContext } from 'react';


const UserContext = createContext()

export const UserProvider = (props) => {
    
    const initialState = 'Login'       

    const [completeName, setCompleteName] = useState(initialState)

    const valuesToPass = {
        completeName, 
        setCompleteName
    }

    return(
        <UserContext.Provider value={valuesToPass}>
            { props.children }
        </UserContext.Provider>
    )

}

export const useUserContext = ()=> {
    const context = useContext(UserContext);
    if(context === undefined) {
        throw new Error("useContext  genera error")
    }
    return context;
}

//export default UserState;
