import DefaultLayout from "../layout/DefaultLayout"
import { useAppContext } from "../contextProvider/ContextProvider"

export default function FirstPage (){
    const appContext = useAppContext()

    const handleClick = () => {appContext.autenticate()}
    return (<>
    <DefaultLayout/>
        <h2>Hola</h2>
        <h6>{appContext.isAuthenticated? "hello Mr Auth":"No auth"}</h6>
        <button className="btn btn-primary" onClick={handleClick}>Autenticar</button>
    </>)
}
