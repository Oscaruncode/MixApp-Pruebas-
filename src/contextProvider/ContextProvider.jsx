import { useContext,createContext, useState } from "react";

//create context
const appContext = createContext({
    isAuthenticated:true,
    autenticate: () => {}
}
)

export function ContextProvider({children}){
    //states
    const [isAuthenticated,setIsAuthenticated] = useState(false)

    //functions
    function autenticate(){
        setIsAuthenticated(!isAuthenticated)
        console.log("auth change to:", isAuthenticated)
    }

    //provider
    return (
    <appContext.Provider value={{isAuthenticated,autenticate}}>
            {children}
    </appContext.Provider>)
}

//useContext
export const useAppContext = ()=> useContext(appContext)