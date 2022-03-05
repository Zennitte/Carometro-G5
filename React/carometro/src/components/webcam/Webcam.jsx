import React, { useState } from 'react';

import Webcam from 'react-webcam'

const WebcamComponent = () => <Webcam/>

const videoConstraints = {
    width: 420,
    height: 400,
    facingMode: "user"
};

export const WebcamCapture = () => {
    const [image, setImage] = useState('');

    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
        }
    );

    return(
        <div className='webcam-container'>
            <div>
                {image == '' ? <Webcam
                    audio={false}
                    height={400}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={420}
                    frameBorder={50}
                    videoConstraints={videoConstraints}

                /> : <img src={image} alt="Imagem Capturada"/>}
            </div>
            <div>
            {image != '' ?
                    <button onClick={(e) => {
                        e.preventDefault();
                        setImage('')
                    }}
                        className="webcam-btn">
                        Tirar Outra Foto</button> :
                    <button onClick={(e) => {
                        e.preventDefault();
                        capture();
                    }}
                        className="webcam-btn">Tirar Foto</button>
                }
            </div>
        </div>
    )
}