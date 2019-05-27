import React, {Fragment} from 'react'
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

const homeSearch = () => {
  return(
    <>
      <form action="http://localhost:3000/classes">
          <button class="btn btn-secondary btn-block mt-4">Explore Classes</button>
      </form>
    < />
  )
}

export default homeSearch()
