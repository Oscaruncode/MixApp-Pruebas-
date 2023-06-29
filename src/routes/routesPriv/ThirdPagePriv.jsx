import DefaultLayout from "../../layout/DefaultLayout"
import { DragComponent } from "../../components/Dragable/dragable"

export default function ThirdPagePriv (){

    return (<>
    <DefaultLayout/>
        <h2>PrivatePAge</h2>
        <p>Some info private</p>
        <DragComponent></DragComponent>
        
    </>)
}