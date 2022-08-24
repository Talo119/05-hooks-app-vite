import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const AboutPage = () => {

  const { user }  = useContext( UserContext )  

  return (
    <>
        <h1>About Page {user?.name }</h1>
        <hr />

    </>
  )
}
