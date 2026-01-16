import "./Header.css"
import logo from "./../../images/logo.png"
import profileLogo from "./../../images/profile.jpg"
export const Header = () => {
  return (
    <>
    <div className="header">
        <div className="logo">
            <img src={logo} alt="logo"></img>
        </div>
        <div className="navbar">
            <ul>
                <div className="profile">
                <a href="/#">profile</a>
                <img src={profileLogo} alt='logo'></img>
                </div>
              
            </ul>
        </div>
    </div>
    </>
  )
}
export default Header
