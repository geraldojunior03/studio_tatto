function About() {
  return (
    <section className='w-100 pt-12' id="about">
        <div class="main" data-aos="fade-down">
          <div class="about-text">
            <h2>Sobre nós</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, impedit at distinctio vero
              explicabo praesentium cum tenetur odit velit nisi libero saepe non, nam eius in veritatis
              laborum dolor voluptatibus maxime aspernatur eveniet earum officiis ut iusto. Non beatae
              reprehenderit, esse optio, eaque suscipit incidunt est inventore dolor, laudantium magnam.</p>
            <div class="instagram-btn">
              <a href="./assets/pages/about.html" class="btn">
                SAIBA MAIS
              </a>
              <span class="material-symbols-outlined">arrow_right_alt</span>
            </div>
          </div>
          <div class="about-images">
            <div class="only-image">
              <img src="./assets/img/home/fisrt-image-about.jpeg" />
            </div>
            <div class="two-image">
              <img src="./assets/img/home/second-image-about.png" />
              <img src="./assets/img/home/third-image-about.png" />
            </div>
          </div>
          <div class="team" data-aos="fade-up">
            <div class="team-text">
              <h2>Tatuador</h2>
            </div>
            <div class="team-gallery">
              <div class="member">
                <img src="./assets/img/home/first-member.png" alt="Membro 1" />
                <h3>John Doe</h3>
                <p>Tatuador Body Piercing</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
