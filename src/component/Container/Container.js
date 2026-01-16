import "./Container.css"
// import { Section } from "../section/Section"
// import {Mostpopuler} from "../Mostpopuler/Mostpopuler"
// import {GamingLibary} from "./../GaminLibary/GamingLibary"
// import {Home} from "../../pages/home/Home"
 export const Container = (props) => { 
  return (
    <div className="container">
      {props.children}
    </div>
  )}


export default Container