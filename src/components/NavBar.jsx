
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="w-screen flex gap-5 justify-center items-center">
        <NavLink>Home</NavLink>
        <NavLink to={"/country"}>Countries</NavLink>
        <NavLink to={"/Test"}>Test api</NavLink>
    </div>
  )
}

export default NavBar