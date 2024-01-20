import React from 'react'
import { useParams } from 'react-router-dom'

const TourCardDetails = () => {


    const params = useParams()
     console.log('params-->>', params);

  return (
    <div>
      <br></br>
      <h5>Dynamic routing</h5>
      <br></br>
      <h1>--- {params.tour} ---</h1>
    </div>
  )
}

export default TourCardDetails
