import './index.scss';
import logo from './../../assets/logo.png';

interface Iprop {
    navItems: string[];
}

function Navbar ({navItems}: Iprop) {
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='nav-items'>
                    <ul>
                        {navItems.map(item => {
                            return <li><a href="">{item}</a></li>
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;