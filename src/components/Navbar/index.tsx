import './index.scss';
import logo from './../../assets/logo.png';
interface IProps {
    navItems: string[];
}


function Navbar ({navItems}: IProps) {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav>
                <div className='logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='nav-items'>
                    <ul>
                        {navItems.map(item => {
                            return <li key={item} onClick={() => scrollToSection(item)}><span key={item}>{item}</span></li>
                        })}
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;