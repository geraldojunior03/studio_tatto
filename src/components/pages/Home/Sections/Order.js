import { Link } from 'react-router-dom'
import AOS from 'aos'
import  'aos/dist/aos.css'
import { useEffect } from 'react'

import './Order.css'

function Order() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <section className="Order">
      <div className="container" data-aos="fade-down">
        <h2>Faça o orçamento da sua <span>TATTO</span></h2>
        <p>Entre em contato para conversarmos melhor sobre sua tatuagem!</p>
        <Link id="contact-btn" to="/contato">Entre em contato</Link>
      </div>
    </section>
  )
}

export default Order
