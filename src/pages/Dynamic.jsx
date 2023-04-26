import React from 'react';
import { useState, useEffect } from 'react';

function Dynamic(props) {
    const [buttonClass2, setButtonClass2] = useState('btn btn-secondary')
    const [buttonClass, setButtonClass] = useState('btn btn-primary');
    const [buttonText, setButtonText] = useState('Attendre 5 s');

  useEffect(() => {
    const timer = setTimeout(() => {
      setButtonClass2('btn btn-primary');
      setButtonText('Télécharger');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  function handleButtonClick() {
    if (buttonClass === 'btn btn-primary') {
      setButtonClass('btn btn-danger');
    } else if (buttonClass === 'btn btn-danger') {
      setButtonClass('btn btn-success');
    } else {
      setButtonClass('btn btn-primary');
    }
  }

  function handleDownloadClick() {
    setButtonClass2('btn btn-secondary');
    setButtonText('Attendre 5 s');
    setTimeout(() => {
      setButtonClass2('btn btn-primary');
      setButtonText('Télécharger');
    }, 5000);
  }

    return (
        <div className="container">
            <h4 className="mb-3">Contenu dynamique</h4>
            <div className="row">
                <div className="col">
                <button id="waiting-5s-btn" className={buttonClass2} onClick={handleDownloadClick}>
                    {buttonText}
                </button>
                </div>
                <div className="col">
                <button id="click-btn" className={buttonClass} onClick={handleButtonClick}>
                    Change de couleur
                </button>
                </div>
            </div>
            </div>
    );
}

export default Dynamic;