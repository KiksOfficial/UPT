import Navbar from '../navbar.js'

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
          <a href='/'>Teenused</a>
          <br/>
          <a href='/'>Kontakt</a>
        </div>
        
      </div>
      </>
  )
};

export default Home;
