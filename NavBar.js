import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div>
            <Link to ={"/"}>Signup</Link>
            <Link to ={"/login"}></Link>
        </div>

    )
}
export default NavBar;