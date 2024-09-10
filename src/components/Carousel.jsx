import React from 'react'
import './Carousel.css'



 const Carousel = () => {
  return (
    <div>
         <h2 class="section-title">Nuestras guitarras</h2>

<div className="card-container">
  <div class="card">
      <img src="./2.jpg" alt="Imagen 1"/>
      <div className="card-content">
          <h2 className="card-title">ejemplo</h2>
          <p className="card-description"></p>
          <a href="#" class="card-link">compra ahora</a>
      </div>
  </div>

  <div className="card">
      <img src="./2.jpg" alt="Imagen 2"/>
      <div className="card-content">
          <h2 className="card-title">ejemplo</h2>
          <p className="card-description"></p>
          <a href="#" class="card-link">compra ahora</a>
      </div>
  </div>

  <div className="card">
      <img src="./2.jpg" alt="Imagen 3"/>
      <div className="card-content">
          <h2 className="card-title">ejemplo</h2>
          <p className="card-description"></p>
          <a href="#" class="card-link">compra ahora</a>
      </div>
  </div>
</div>

    </div>
  )
}
export default Carousel
