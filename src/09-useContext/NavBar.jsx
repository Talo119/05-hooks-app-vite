import { Link, NavLink } from 'react-router-dom'


export const NavBar = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink
                        to="/" 
                        className={(args) => {
                            return `nav-link ${ args.isActive ? 'active' : '' }`
                        }} 
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        to="/login" 
                        className={(args) => {
                            return `nav-link ${ args.isActive ? 'active' : '' }`
                        }} 
                    >
                        Login
                    </NavLink>
                    
                    <NavLink 
                        to="/about" 
                        className={ (args) => {
                            return `nav-link ${ args.isActive ? 'active' : '' }`
                        }}
                    >
                        About
                    </NavLink>                    
                </ul>
            </div>
        </div>
    </nav>
    
  )
}
