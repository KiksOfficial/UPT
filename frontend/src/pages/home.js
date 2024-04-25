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
          Loome silmapaistvaid veebilehti, mis haaravad külastajate tähelepanu ja pakuvad suurepärast kasutajakogemust. Meie fookuses on disaini ja funktsionaalsuse sümbioos, mis aitab teie ettevõttel võrgus esile tõusta. Usaldage meid oma veebipresenssi loomisel ja laske meie meeskonnal muuta teie visioon reaalsuseks.</p>
          <a href='/kontaktid'>Võtke meiega ühendust</a>
        </div>
        <div className="tilt">
        <div className="tilt__content">
            <img src="https://bs-uploads.toptal.io/blackfish-uploads/components/seo/5819174/og_image/optimized/0717_Brutalist_and_Minimalist_Web_Design_Lina_Social-cbd0996a3f2bef8b9b10b86e0c4fb9e5.png" alt=""/>
        </div>
        </div>
    </div>
    <div className='home-kesk'>
      <div className='home-kesk-vasak'>
        <h1>Mis teenuseid me pakume?</h1>
        <ul>
          <li>Kodulehtede koostamine</li>
          <li>Kodulehtede koostamine</li>
          <li>Kodulehtede koostamine</li>
          <li>Kodulehtede koostamine</li>
        </ul>
      </div>
      <div className='home-kesk-parem'>
        <h1>Pilkupüüdva veebilehe omadused</h1>
      </div>
    </div>

    <script src="../tilt.js"></script>

    <div className='home-alumine'>
      <h1>Hpome</h1>
    </div>
      </div>
      <div className='footer'>
        <div className='footer-vasak'>
          <h3>Võtke meiega ühendust</h3>
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
