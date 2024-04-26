import Navbar from '../navbar.js';
import { Link } from 'react-router-dom';
import '../tilt.js'
import '../styles/home.css'
import '../styles/index.css'

function Home() {
  return (
    <>
      <Navbar />
      <div className='home-content'>
        <div className='home-ylemine'>
        <div className='home1'>
          <h1>Silmapaistva välimusega veebilehed mõistliku hinnaga!</h1>
          <p>
          Loome silmapaistvaid veebilehti, mis haaravad külastajate tähelepanu ja pakuvad suurepärast kasutajakogemust.</p>
          <p>Meie fookuses on disaini ja funktsionaalsuse sümbioos, mis aitab teie ettevõttel võrgus esile tõusta.</p>
          <p>Usaldage meid oma veebipresenssi loomisel ja laske meie meeskonnal muuta teie visioon reaalsuseks.</p>
          <br/>
          <a href='/kontaktid'>Kirjutage meile</a>
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
        <h4>Veebidisain</h4>
        <p>
          Pakume professionaalset veebidisaini teenust, mis rõhutab teie brändi isiksust ja tagab suurepärase kasutajakogemuse. Kasutades kaasaegseid tehnoloogiaid ja disainiprintsiipe, loome kodulehti alates kontseptsioonist kuni käivitamiseni, pakkudes teile paindlikkust, tehnilist tuge ja rahuldust.
        </p>
      </div>
    </div>

    <script src="../tilt.js"></script>

    <div className='home-alumine'>
      <div className='home-alumine-image'>
        <div className='hea-veebileht1'>
        <h4>Kasutajasõbralik disain</h4> 
        <p>
          Veebileht peaks olema lihtne navigeerida ja kasutada. Menüüd, lingid ja muud elemendid peaksid olema hästi paigutatud ja kergesti leitavad.
        </p>
        <h4>Kiire laadimisaeg</h4>
        <p>Kiire laadimisaeg on oluline, et tagada kasutajatele sujuv kogemus. Veebileht peaks laadima kiiresti nii arvutis kui ka mobiilseadmetes.</p>
        <h4>Reageeriv disain</h4>
        <p> Veebileht peaks olema kohandatav erinevatele seadmetele ja ekraanisuurustele, tagades optimaalse kogemuse nii arvutis, nutitelefonis kui ka tahvelarvutis</p>
        <h4>SEO-sõbralik</h4>
        <p>Hea veebileht on optimeeritud otsingumootorite jaoks, et olla leitav ja saavutada kõrgemaid positsioone otsingutulemustes.</p>
        </div>
        <div className='hea-veebileht2'>
          <h4>Kvaliteetne sisu</h4>
          <p>Hea veebileht sisaldab asjakohast, huvitavat ja informatiivset sisu, mis vastab külastajate vajadustele ja püüab nende tähelepanu.</p>
          <h4>Visuaalne atraktiivsus</h4>
          <p>Professionaalne ja atraktiivne visuaalne disain aitab luua positiivset esmamuljet ja meelitada külastajate tähelepanu.</p>
          <h4>Hea navigeerimine</h4>
          <p> Veebileht peaks olema hästi struktureeritud ja varustatud selge navigeerimisega, mis aitab külastajatel leida vajalikku teavet kiiresti ja lihtsalt.</p>
          <h4>Interaktiivsus</h4>
          <p>Interaktiivsed elemendid, nagu vormid, nuppudele klikkimine, animatsioonid jne, võivad parandada kasutajakogemust ja suurendada kaasatust.</p>
        </div>
      </div>
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
