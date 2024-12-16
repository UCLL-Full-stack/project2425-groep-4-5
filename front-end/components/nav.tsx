import { NavLink } from "react-router-dom";

const Nav = () => {
    return <>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/login">Login</NavLink>
    </>
}

export default Nav