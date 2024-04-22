import './styles/index.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <div className='navbar'>
            <h1 className='left'>Logo</h1>
            <div className='right'>
                <Link className='navbar-btn-home' to='/'>
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

export default Navbar;
