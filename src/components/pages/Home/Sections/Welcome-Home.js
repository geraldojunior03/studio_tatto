import './Welcome-Home.css'
import TypeIt from 'typeit-react';

function Welcome() {

  function onClickAbout(e) {
    e.preventDefault();
    const elementToView = document.getElementById("about");
    elementToView.scrollIntoView();
  }

  return (
    <section id="welcome">
      <div id="welcome-text">
        <h2>STUDIO</h2>
        <p>
          <TypeIt
            options={{
              strings: ["TATTO"],
              waitUntilVisible: true,
              loop: false
            }}
          />
        </p>
        <a onClick={onClickAbout}>
          <i class="fa-sharp fa-solid fa-chevron-down"></i>
        </a>
      </div>
    </section>
  )
}

export default Welcome
