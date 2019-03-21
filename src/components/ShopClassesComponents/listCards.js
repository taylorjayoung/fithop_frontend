import React from 'react'

function check(event){
  const myElementToCheckIfClicksAreInsideOf = document.getElementsByClassName("FirstCard")
  console.log(myElementToCheckIfClicksAreInsideOf[0].contains(event.target))
}
export default function listCards(view, setCurrentClass){
    return (
      <>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard FirstCard" : "SkinnyCard"} id="1">Card1
          <div onClick={(event) => check(event)}  onClick={(event) => setCurrentClass(event)} id="1" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>


            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard SecondCard" : "SkinnyCard"} id="2">Card2
          <div onClick={(event) => check(event)} onClick={(event) => setCurrentClass(event)} id="2" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard" : "SkinnyCard"} id="3">Card3
          <div onClick={(event) => setCurrentClass(event)} id="3" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard" : "SkinnyCard"} id="1">Card4
          <div onClick={(event) => setCurrentClass(event)} id="1" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard" : "SkinnyCard"} id="1">Card5
          <div onClick={(event) => setCurrentClass(event)} id="1" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard" : "SkinnyCard"} id="1">Card6
          <div onClick={(event) => setCurrentClass(event)} id="1" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard" : "SkinnyCard"} id="1">Card7
          <div onClick={(event) => setCurrentClass(event)} id="1" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard" : "SkinnyCard"} id="1">Card8
          <div onClick={(event) => setCurrentClass(event)} id="1" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard" : "SkinnyCard"} id="1">Card9
          <div onClick={(event) => setCurrentClass(event)} id="1" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard" : "SkinnyCard"} id="1">Card10
          <div onClick={(event) => setCurrentClass(event)} id="1" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard" : "SkinnyCard"} id="1">Card11
          <div onClick={(event) => setCurrentClass(event)} id="1" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
        <div onClick={(event) => setCurrentClass(event)} className={view === "List" ? "ClassCard" : "SkinnyCard"} id="1">Card12
          <div onClick={(event) => setCurrentClass(event)} id="1" className={view === "List" ? "CardInfo" : "SkinnyCardInfo"}>

            Class Name: Name,
            Class Price: Price,
            Class Location: Location,
            Class Time: Time
          </div>
        </div>
      < />
    )
  }
