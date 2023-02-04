import React from 'react';

function Testimony() {
  return (
    <div className = "testimony-container">
      <img className = "image-testimony" 
      src = {require("../images/testimonio-emma.png")}
      alt = "imagen de Emma"/>
      <div className = "testimony-text-container">
      <p className='name-testimony'>Emma Bostian en Suecia</p>
      <p className='job-testimony'>Ingeniero de Software en Sportify</p>
      <p className='text-testimony'>"Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
      <p></p>
      </div>
    </div>
  )
}