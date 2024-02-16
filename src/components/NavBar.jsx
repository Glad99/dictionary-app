
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div className="flex gap-20 justify-center items-center mb-5 bg-red-300 h-10 text-white">
        <NavLink>Home</NavLink>
        <NavLink to={"/country"}>Countries</NavLink>
        <NavLink to={"/Test"}>Test api</NavLink>
    </div>
  )
}

export default NavBar