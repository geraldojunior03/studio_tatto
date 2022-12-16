function Welcome() {
  return (
    <section id="welcome">
      <div id="welcome-text" className="h-screen text-white text-9xl flex flex-col items-center justify-center ">
        <h2 className="uppercase font-thin">Studio</h2>
        <p className='uppercase leading-normal font-bold tracking-widest'>Tatto</p>
        <a href="#about" className='text-4xl leading-3'>
          <i class="fa-sharp fa-solid fa-chevron-down"></i>
        </a>
      </div>
    </section>
  )
}

export default Welcome
