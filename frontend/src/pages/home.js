import Navbar from '../navbar.js';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Navbar />
      <div className='home-content'>
        <div className='home1'>
          <h1>Silmapaistva välimusega veebilehed mõistliku hinnaga!</h1>
          <p>
          Pmst mingisugune kirjeldus i dunno + paremale peaks mingi pildi panema idk void teha mis tahad</p>
        </div>
      </div>
      <div className='footer'>
        <div className='footer-vasak'>
          <p>example@gmail.com</p>
        </div>
        <div className='footer-kesk'></div>
        <div className='footer-parem'>
          <h3>Lingid</h3>
          <Link className='footer-btn' to='/'>
            Avaleht
          </Link>
          <Link className='footer-btn' to='/'>
            Teenused
          </Link>
          <Link className='footer-btn' to='/kontaktid'>
            Kontakt
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
