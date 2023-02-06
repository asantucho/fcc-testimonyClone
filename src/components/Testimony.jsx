import React from 'react';
import "../styles/styles.css";

function Testimony(props) {
  return (
    <div className = "testimony-container">
      <img className = "image-testimony" 
      src = {require(`../images/testimonio-${props.image}.png`)}
      alt = "Foto de testimonio"/>
      <div className = "testimony-text-container">
      <p className='name-testimony'><strong>{props.name}</strong> en {props.country}</p>
      <p className='job-testimony'>{props.job} en <strong>{props.company}</strong></p>
      <p className='text-testimony'>"{props.testimony}"</p>
      </div>
    </div>
  )
}

export default Testimony;