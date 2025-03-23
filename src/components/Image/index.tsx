import landingImage from './../../assets/landing image.jpg';

function Image () {
    return (
        <>
            <div>
                <img style={{
                    width: '100%',
                    backgroundSize: 'contain',
                }} src={landingImage} alt="landingImage" />
            </div>
        </>
    );
}

export default Image;