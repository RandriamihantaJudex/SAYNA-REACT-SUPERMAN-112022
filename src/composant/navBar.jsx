import "./navbarStyle.css"
import { Link } from "react-router-dom"
function Navbar(){
return <div className="navbar">
    <img src="./logos/logo_blanc.png" alt="" srcset="" />
    <div className="nvbComponent">
        <Link to={"/"}>HOME</Link>
        <Link to={"/GAME"}>GAME</Link>
        <Link to={"/E-SHOP"}>E-SHOP</Link>
        <Link to={"/COMPTE"}>MON COMPTE</Link>
    </div>
</div>
}
export default Navbar