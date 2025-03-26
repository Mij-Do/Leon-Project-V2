import './index.scss';
import aboutImage from './../../assets/about-img.jpg'

const About = () => {
    return (
        <>
            <div className='spicial-header'>
                <h1>about</h1>
                <p>less is more work</p>
            </div>

            <div className='about-content'>
                <div className='image'>
                    <img src={aboutImage} alt="about-img" />
                </div>
                <div className='content'>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, voluptate.</h3>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, tempore.</p>
                </div>
            </div>
        </>
    )
}

export default About;