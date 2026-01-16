
import"./MostPopuler.css"
import {Card} from "./../../cards/Card"
import Data from "./../../Data/Data"

let cards=Data.map(function(card){
  return  <Card key={card.key} imgCard={card.image}  title={card.title} title2={card.title2} rate={card.rate} down={card.down}  />
})



export const Mostpopuler = () => {
  return (
    <div className='feature'>
        <div className='title'>
        <h2>Mostpopuler <span>right now</span></h2>
        </div>
        <div className='items'>
         {cards}
        </div>
    </div>
  )
}
export default Mostpopuler
