import Navbar from '../navbar.js'
import { Link } from 'react-router-dom'

function Home() {
  return (
      <>
      <Navbar />
      <div className='home-content'>

      </div>
      <div className='footer'>
        <div className='footer-vasak'>
          <p>example@gmail.com</p>
        </div>
        <div className='footer-kesk'>

        </div>
        <div className='footer-parem'>
          <h3>Lingid</h3>
          <Link className='navbar-btn' to='/'>
            Avaleht
          </Link>
          <Link className='navbar-btn' to='/'>
            Teenused
          </Link>
          <Link className='navbar-btn' to='/kontaktid'>
            Kontakt
          </Link>
        </div>
        
      </div>
      </>
  )
};

export default Home;
