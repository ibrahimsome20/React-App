import React from 'react'
import Card from '../../cards/Card'
import Data from '../../Data/Data'
import"../../component/Mostpopuler/MostPopuler.css"

const cards=Data.map(card=>{
  return <Card key={card.key} img={card.img}/>
})


export const Browse = () => {
  return (
    <>
    <h1>hello world</h1>
    <div className="items">
      {cards}
    </div>
   
    
    </>
  )
  }

export default Browse