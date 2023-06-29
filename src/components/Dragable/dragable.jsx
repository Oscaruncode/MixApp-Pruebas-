import {useRef, useEffect} from "react"
import "./dragg.css"

export function DragComponent () {

    const containerRef = useRef(null)
    const ballRef = useRef(null)
    const clicked = useRef(false)
    const coords = useRef({startX:0,startY:0, lastX:0, lastY:0})

    useEffect(()=>{
        if(!containerRef.current || !ballRef.current){return}

        const container = containerRef.current
        const ball = ballRef.current

       
        const onMouseDown = (e) => { clicked.current=true; coords.current.startX=e.clientX ; coords.current.startY=e.clientY }
        const onMouseUp = (e) => { clicked.current=false; coords.current.lastX=ball.offsetLeft ; coords.current.lastY=ball.offsetTop}
        const onMouseMove = (e) => { if(!clicked.current){return}; 

        const nextX = e.clientX-coords.current.startX+coords.current.lastX
        const nextY = e.clientY-coords.current.startY+coords.current.lastY
        ball.style.top=`${nextY}px`
        ball.style.left=`${nextX}px`
    }

        
        container.addEventListener("mousemove", onMouseMove)
         ball.addEventListener("mousedown", onMouseDown)
          ball.addEventListener("mouseup", onMouseUp)

         const cleanUp = ()=> {
          container.removeEventListener("mousemove", onMouseMove)
         ball.removeEventListener("mousedown", onMouseDown)
        ball.removeEventListener("mouseup", onMouseUp)
     }
         return cleanUp
    },[])
   
        

   

    return ( 
        <>
            <div className="contain container bg-dark" ref={containerRef}>
                <div className="ball bg-white" ref={ballRef} ></div>
            </div>
        </>
    )
}