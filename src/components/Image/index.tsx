import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAsia } from "@fortawesome/free-solid-svg-icons";


function Image () {
    return (
        <>
            <section>
                <div className='landing-image'>
                    <h1>Hello there</h1>
                    <h3>We are Leon - Super Creative & Minimal Agancy Web Template</h3>
                </div>
                <div className='icons'>
                    <div className='item-1 card'>
                        <FontAwesomeIcon className='font-awesome' icon={faMagic}/>
                        <h3>Tell Us your Idea</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, minus!</p>
                    </div>
                    <div className='item-2 card'>
                        <FontAwesomeIcon className='font-awesome' icon={faGem}/>
                        <h3>Tell Us your Idea</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, minus!</p>
                    </div>
                    <div className='item-3 card'>
                        <FontAwesomeIcon className='font-awesome' icon={faGlobeAsia}/>
                        <h3>Tell Us your Idea</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, minus!</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Image;