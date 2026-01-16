import React from 'react'
import {Card2} from "./../../cards/Card"
import {Data2} from '../../Data/Data'

const cards=Data2.map(card=>{
 return <Card2 key={card.key} imgCard={card.image} title={card.title} title2={card.title2} dataadded={card.dataadded} Hourspayed={card.Hourspayed} />
})


export const GamingLibary = () => {
  return (
    <>
    
    <div className='feature'>
        <div className='title'>
        <h2>your gaming <span>library</span></h2>
        <div className='gaming'>
             {cards}
            </div>
            
         </div>
    </div>
   
    </>
)
  
}
export default GamingLibary