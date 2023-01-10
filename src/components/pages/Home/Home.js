import About from './Sections/About'
import Welcome from './Sections/Welcome-Home'
import './Home.css'
import Staff from './Sections/Staff'
import Order from './Sections/Order'


function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Staff />
      <Order />
    </>
  )
}

export default Home
