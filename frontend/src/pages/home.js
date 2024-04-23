import Navbar from '../navbar.js';
import { Link } from 'react-router-dom';
import '../tilt.js'

function Home() {
  return (
    <>
      <Navbar />
      <div className='home-content'>
        <div className='home-ylemine'>
        <div className='home1'>
          <h1>Silmapaistva välimusega veebilehed mõistliku hinnaga!</h1>
          <p>
          Pmst mingisugune kirjeldus i dunno + paremale peaks mingi pildi panema idk void teha mis tahad</p>
        </div>
        <div class="tilt">
        <div class="tilt__content">
            <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5819174/og_image/optimized/0717_Brutalist_and_Minimalist_Web_Design_Lina_Social-cbd0996a3f2bef8b9b10b86e0c4fb9e5.png" alt=""/>
        </div>
        </div>
    </div>

    <script src="../tilt.js"></script>
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
