import {React, useState} from 'react';
const url = '/files/download.pdf';

function Download(props) {
    const [fileName, setFileName] = useState('');
     const [buttonText, setButtonText] = useState('Upload');

    function handleUpload() {
        const input = document.getElementById('uploadFile');
        setButtonText('Fichier uploadé');
        setFileName('Fichier ' + input.files[0].name + ' uploadé');
    }    

    return (
        <div className="container">
            <h1>Upload and Download</h1>
            <div className="row">
                <div className="col-sm-6">
                <h2>Télécharger un fichier</h2>
                <p>Cliquez sur le bouton ci-dessous pour télécharger un fichier:</p>
                <a href={url} className="btn btn-primary" download>
                    Télécharger
                </a>
                </div>
                <div className="col-sm-6">
                <h2>Uploader un fichier</h2>
                <p>
                    Cliquez sur le bouton ci-dessous pour sélectionner un fichier à
                    uploader:
                </p>
                    <input type="file" id="uploadFile" />
                    <button
                        type="button"
                        id="uploadButton"
                        onClick={handleUpload}
                        className="btn btn-primary"
                    >
                        {buttonText}
                    </button>
                    <div id="fileName">{fileName}</div>
                </div>
            </div>
            </div>

    );
}

export default Download;