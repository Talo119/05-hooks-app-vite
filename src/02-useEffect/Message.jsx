import { useState } from "react"
import { useEffect } from "react"

export const Message = () => {

    const [coords, setcoords] = useState({x:0, y:0})
    useEffect(() => {

        const onMouseMove = ({x,y}) => {
            //const coords = {x,y}
            //console.log(coords)
            setcoords({x, y})
        }

        window.addEventListener( 'mousemove', onMouseMove)
    
      return () => {
        window.removeEventListener( 'mousemove', onMouseMove )
      }
    }, [])
    

  return (
    <>
        <div class="alert alert-danger" role="alert">
            Usuario ya existe!
            { JSON.stringify( coords ) }
        </div>
    </>
  )
}
