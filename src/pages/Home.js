import { useState } from 'react';
import videoFile from '../assets/videos/30.mp4'
import videoImg from '../assets/img//video-overlay.jpg'

const Home = () => {
    const [isThumb, setIsThumb] = useState(true);
    
    const handleIsThumb = () => {
        setIsThumb(!isThumb);
    };
    return (
        <>
            <div className='home'>
                <header className='p-5'>
                    <h1 className='text-white text-3xl italic'>Serving the Excess & Surplus Lines Broker Community for More Than 30 Years</h1>
                </header>
                <div className='flex justify-center items-center'>
                    <div className='video-box' onClick={() => handleIsThumb(true)}>
                        <span className='video-box-skrew skrew1'></span>
                        <span className='video-box-skrew skrew2'></span>
                        <span className='video-box-skrew skrew3'></span>
                        <span className='video-box-skrew skrew4'></span>

                        <div className='video-box-content'>
                            <img className={isThumb ? 'video-box-content_img' : 'hidden'} src={videoImg}></img>
                            <video width="750" height="500" controls loop muted >
                                <source src={videoFile} type="video/mp4"/>
                            </video>
                        </div>
                    </div>                
                </div>
                <div className='news'>
                     
                </div>
            </div>
        </>
    );
};

export default Home;
