import './index.scss';

const Footer = () => {
    let date = new Date();
    return (
        <footer>
            <div>&copy;<span>{date.getFullYear()}</span> <span>Ahmed</span> All Right Reserved</div>
            <p>This is React Version</p>
        </footer>
    );
}

export default Footer;