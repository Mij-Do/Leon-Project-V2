import './index.scss';
import port1 from './../../assets/port-img1.jpg';
import port2 from './../../assets/port-img2.jpg';
import port3 from './../../assets/port-img3.jpg';

const Portfolio = () => {
    return (
        <>
            <div className='spicial-header'>
                <h1>portflio</h1>
                <p>If you do it right, it will last forever.</p>
            </div>

            <div className='cards'>
                <div className='port-card'>
                    <div className='port-image'>
                        <img src={port1} alt="port-img1" />
                    </div>
                    <div className='port-content'>
                        <h3>Progect Here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, asperiores?</p>
                    </div>
                </div>

                <div className='port-card'>
                    <div className='port-image'>
                        <img src={port2} alt="port-img1" />
                    </div>
                    <div className='port-content'>
                        <h3>Progect Here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, asperiores?</p>
                    </div>
                </div>

                <div className='port-card'>
                    <div className='port-image'>
                        <img src={port3} alt="port-img1" />
                    </div>
                    <div className='port-content'>
                        <h3>Progect Here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, asperiores?</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;