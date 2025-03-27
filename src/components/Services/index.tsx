import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faVectorSquare } from "@fortawesome/free-solid-svg-icons";
import { faPencilRuler } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import services from './../../assets/services-img.jpg';


const Services = () => {
    return (
        <>
            <section>
                <div className='spicial-header'>
                    <h1>services</h1>
                    <p>don't be busy, be prodactive</p>
                </div>

                <div className='body-services'>
                    <div className='content-services'>
                        <div className='card'>
                            <h3> <FontAwesomeIcon className='font-awesome' icon={faPalette}/> Web Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, expedita?</p>
                        </div>

                        <div className='card'>
                            <h3> <FontAwesomeIcon className='font-awesome' icon={faVectorSquare}/> Graghic Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, expedita?</p>
                        </div>

                        <div className='card'>
                            <h3> <FontAwesomeIcon className='font-awesome' icon={faPencilRuler}/> UX & UI</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, expedita?</p>
                        </div>

                        <div className='card'>
                            <h3> <FontAwesomeIcon className='font-awesome' icon={faPalette}/> Web Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, expedita?</p>
                        </div>

                        <div className='card'>
                            <h3> <FontAwesomeIcon className='font-awesome' icon={faRobot}/> AI</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, expedita?</p>
                        </div>

                        <div className='card'>
                            <h3> <FontAwesomeIcon className='font-awesome' icon={faArchive}/> machine learning </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, expedita?</p>
                        </div>
                    </div>
                    <div className='image-services'>
                        <img src={services} alt="services-img" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;