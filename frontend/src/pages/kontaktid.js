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


/*

MDEA OSALISELT SAIN SELLE TOOLE A KUI EI SOBI SS ARA YLEMIST DELETE

import React, { useState } from 'react';
import '../styles/index.css';
import Navbar from '../navbar';

function Kontaktid() {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.elements.Email;
  
    // Perform validation and set error message if needed
    if (!isValidEmail(emailInput.value)) {
      setErrorMessage('Please enter a valid email address');
    } else if (emailInput.value.indexOf('@') === -1) {
      setErrorMessage('Email address must contain "@" symbol');
    } else {
      setErrorMessage('');
      e.target.submit();
    }
  };
  
  const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <>
      <Navbar />
      <h1>Kontaktid</h1>
      <div className='kontaktid-card'>
        <h1>Võtke meiega ühendust</h1>
        <form onSubmit={handleSubmit} action="https://formsubmit.co/marcusariston@gmail.com" method="POST">
          <input type='text' placeholder='Nimi' name='Nimi'></input>
          <input type='email' placeholder='Email' name='Email'></input>
          {errorMessage && <span className='error'>{errorMessage}</span>}
          <textarea placeholder='Sõnum' className='kontaktid-textarea' name='Sõnum'></textarea>
          <button type='submit' className='kontaktid-button'>Saada</button>
        </form>
      </div>
    </>
  );
}

export default Kontaktid;

*/
