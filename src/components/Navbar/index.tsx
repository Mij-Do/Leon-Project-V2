import './index.scss';
import logo from './../../assets/logo.png';

function Navbar () {
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='nav-items'>
                    <ul>
                        <li><a href="">services</a></li>
                        <li><a href="">portfolio</a></li>
                        <li><a href="">about</a></li>
                        <li><a href="">contact</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;