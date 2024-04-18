import './styles/index.css'

function Navbar() {
    return (
        <>
        <div className='navbar'>
            <h1 className='left'>Logo</h1>
            <div className='right'>
                <a className='navbar-btn' href='/'>
                    Avaleht
                </a>
                <a className='navbar-btn' href='/'>
                    Teenused
                </a>
                <a className='navbar-btn' href='/'>
                    Kontakt
                </a>
            </div>
        </div>
        </>
    )
  };
  
  export default Navbar;
