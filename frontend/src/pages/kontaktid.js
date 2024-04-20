import '../styles/index.css'
import Navbar from '../navbar'

function Kontaktid() {
  return (
      <>
      <Navbar />
      <h1>Kontaktid</h1>
      <div className='kontaktid-card'>
        <h1>Võtke meiega ühendust</h1>
        <form action="https://formsubmit.co/marcusariston@gmail.com" method="POST">
            <input type='text' placeholder='Nimi' name='Nimi'></input>
            <input type='email' placeholder='Email' name='Email' required></input>
            <textarea placeholder='Sõnum' className='kontaktid-textarea' name='Sõnum'></textarea>
            <button type='submit' className='kontaktid-button'>Saada</button>
        </form>
      </div>
      </> 
  )
};

export default Kontaktid;
