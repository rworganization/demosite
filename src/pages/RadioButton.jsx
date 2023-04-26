import React from 'react';
import { useState } from 'react';

import '../styles/checkout.css'

function RadioButton(props) {
    const [validated, setValidated] = useState(false);
    const [modalShown, setModalShown] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    const handleConfirmationClick = () => {
        // Vérifier si l'opération a réussi, puis afficher le modal
        setModalShown(true);
    };

    const handleOkClick = () => {
        // Vérifier si l'opération a réussi, puis cacher le modal
        setModalShown(false);
    };
    
    return (
        <div className="container">
            <h4 className="mb-3">Radio boutons</h4>
            <h6> Aimez-vous le site ? </h6>
            <form>
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="like"
                    id="like-yes"
                    defaultValue="yes"
                />
                <label className="form-check-label" htmlFor="like-yes">
                    Oui
                </label>
                </div>
                <div className="form-check">
                <input
                    className="form-check-input"
                    type="radio"
                    name="like"
                    id="like-no"
                    defaultValue="no"
                />
                <label className="form-check-label" htmlFor="like-no">
                    Non
                </label>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                Envoyer
                </button>
            </form>
            </div>

    );
}

export default RadioButton;