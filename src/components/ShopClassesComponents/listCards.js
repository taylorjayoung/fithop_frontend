import React from 'react'

function mapClasses(view, classes, setCurrentClass, viewClass, bookNow){

}

export default function listCards(view, classes, setCurrentClass, viewClass,
bookNow){
      return classes.map( c => {
        return(
          <div key={c.id} onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard FirstCard" : "SkinnyCard"} id={c.id}>
            <div onClick={(event) => setCurrentClass(event)} id={c.id} className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>
              Class: {c.name},
              Price: {c.price},
              Location: {c.address},
              Time: {c.time}
            </div>
            <div className="MoreInfoButtonDiv">
              <input type="button" onClick={(event, id) => viewClass(event, c.id)} value="View Class"/>
            </div>
            <div className="BookButtonDiv">
              <input type="button" onClick={(event, id) => bookNow(event, c.id)} value="Book Now"/>
            </div>
          </div>
        )
      })
  }
