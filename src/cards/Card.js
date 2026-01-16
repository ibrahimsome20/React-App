import "./Card.css"



export const Card = (prob) => {
  return (
    <>
         <div className='card'>
        <div className='img-card'>
            <img src={prob.imgCard}></img>
        </div>
        <div className='info-card'>
            <h4>{prob.title}<br/>{prob.title2}</h4>
            <span>{prob.rate}<br/>{prob.down}</span>
        </div>
    </div>
</>
  )
}
const Card2=(prob)=>{
    return(
        <>
        <div className="card-2">
            <div className="img-card">
             <img src={prob.imgCard}></img>
            </div>
            <div className="title">
             <h4>{prob.title}</h4>
             <h4>{prob.title2}</h4>
            </div>
            <div className="data-add">
            <h4>date added</h4>
             <h4>{prob.dataadded}</h4>
            </div>
            <div className="hour-play">
            <h4>hours played</h4>
             <h4>{prob.Hourspayed}</h4>
            </div>
            <div className="currently">
            <h4>currently</h4>
             <h4>download</h4>
            </div>
            

        </div>
        </>
    )
}



export default Card
export {Card2}