import AOS from 'aos'
import  'aos/dist/aos.css'
import { useEffect } from 'react'

import previewImage from '../../../../img/preview.png'

import './About.css'

function About() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <section id="about">
        <div className="main" data-aos="fade-down">
          <div className="about-text">
            <h2>Sobre nós</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, impedit at distinctio vero
              explicabo praesentium cum tenetur odit velit nisi libero saepe non, nam eius in veritatis
              laborum dolor voluptatibus maxime aspernatur eveniet earum officiis ut iusto. Non beatae
              reprehenderit, esse optio, eaque suscipit incidunt est inventore dolor, laudantium magnam.</p>
            <div className="instagram-btn">
              <a href="./assets/pages/about.html" className="btn">
                SAIBA MAIS &nbsp;
              <i class="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="about-images">
            <div className="only-image">
              <img className='first' src={previewImage} alt="Main"/>
            </div>
            <div className="two-image">
              <img className='second' src={previewImage} alt="Secondary"/>
              <img className='third' src={previewImage} alt="Secondary" />
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
