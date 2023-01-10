import { useEffect } from 'react';
import AOS from 'aos'
import  'aos/dist/aos.css'

import previewImage from '../../../../img/preview.png'


import './Staff.css'

function Staff() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <section className="Staff" data-aos="fade-up">
      <div className="staff-text">
        <h2>Funcionários</h2>
      </div>
      <div className="team-gallery">
        <div className="member">
          <img src={previewImage} alt="John Doe" />
          <h3>John Doe</h3>
          <p>Tatuador</p>
        </div>
        <div className="member">
          <img src={previewImage} alt="John Doe" />
          <h3>John Doe</h3>
          <p>Tatuador & Body piercing</p>
        </div>
      </div>
    </section>
  )
}

export default Staff
