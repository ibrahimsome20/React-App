
function List(probs){
    return(
        
        <ul className="list-group">
            <li className="list-group-item">
                <input type="checkBox" id={probs.media}></input>
                <label htmlFor={probs.media} >{probs.media}</label>
            </li>
           
        </ul>
        
    );
}
export default List