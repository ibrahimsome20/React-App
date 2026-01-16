
function Header(){
    const client="designer";
    
   let title=client==="designer" ? "this website for fun":"fuck you"
    return(
        <div className="navbar bg-primary text-white">
        <h1 >{title}</h1>
        </div>
    )
}
export default Header