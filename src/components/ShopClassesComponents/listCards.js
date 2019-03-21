import React from 'react'

function check(event){
  const myElementToCheckIfClicksAreInsideOf = document.getElementsByClassName("FirstCard")
  console.log(myElementToCheckIfClicksAreInsideOf[0].contains(event.target))
}

function mapClasses(view, classes, setCurrentClass){
  return classes.map( c => {
    return(
      <div key={c.id} onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard FirstCard" : "SkinnyCard"} id={c.id}>
        <div onClick={(event) => setCurrentClass(event)} id={c.id} className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
          Class: {c.name},
          Price: {c.price},
          Location: {c.address},
          Time: {c.time}
        </div>
      </div>
    )
  })
}

export default function listCards(view, classes, setCurrentClass){
    return (
      <>
        {mapClasses(view, classes, setCurrentClass)}
      < />
    )
  }
