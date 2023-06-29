import { useAppContext } from "../contextProvider/ContextProvider"
import DefaultLayout from "../layout/DefaultLayout"


export default function SecondPage (){
    const appContext = useAppContext()

    return (<>
    <DefaultLayout/>
        {appContext.isAuthenticated?"User Auth":"User not Auth"}
    </>)
}
