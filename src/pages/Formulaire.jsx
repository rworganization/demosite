import React, { Component } from 'react';
import '../styles/checkout.css';

class Formulaire extends Component {
    

    render() {
        return (
            <div className="container">
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Formulaire d'inscription</h4>
                    <form className="needs-validation" noValidate="">
                    <div className="row g-3">
                        <div className="col-sm-6">
                        <label htmlFor="firstName" className="form-label">
                            Nom
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            placeholder=""
                            defaultValue=""
                            required=""
                        />
                        <div className="invalid-feedback">Un prénom valide est requis.</div>
                        </div>
                        <div className="col-sm-6">
                        <label htmlFor="lastName" className="form-label">
                            Nom
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            placeholder=""
                            defaultValue=""
                            required=""
                        />
                        <div className="invalid-feedback">Un nom valide est requis.</div>
                        </div>
                        <div className="col-12">
                        <label htmlFor="username" className="form-label">
                            Nom d'utilisateur
                        </label>
                        <div className="input-group has-validation">
                            <span className="input-group-text">@</span>
                            <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="Nom d'utilisateur"
                            required=""
                            />
                            <div className="invalid-feedback">
                            Votre nom d'utilisateur est obligatoire.
                            </div>
                        </div>
                        </div>
                        <div className="col-12">
                        <label htmlFor="email" className="form-label">
                            Email <span className="text-body-secondary">(Optional)</span>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="nom@example.com"
                        />
                        <div className="invalid-feedback">
                            Veuillez saisir une adresse électronique valide.
                        </div>
                        </div>
                        <div className="col-12">
                        <label htmlFor="address" className="form-label">
                            Adresse
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address"
                            placeholder="10ème Rue de la Faillette"
                            required=""
                        />
                        <div className="invalid-feedback">Veuillez saisir votre adresse.</div>
                        </div>
                        <div className="col-12">
                        <label htmlFor="address2" className="form-label">
                            Adresse 2 <span className="text-body-secondary">(Optionnel)</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="address2"
                            placeholder="Appartement ou suite"
                        />
                        </div>
                        <div className="col-md-5">
                        <label htmlFor="country" className="form-label">
                            Pays
                        </label>
                        <select className="form-select" id="country" required="">
                            <option value="">Choisissez...</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Allemagne">Allemagne</option>
                            <option value="Australie">Australie</option>
                            <option value="Brésil">Brésil</option>
                            <option value="Canada">Canada</option>
                            <option value="Chine">Chine</option>
                            <option value="Espagne">Espagne</option>
                            <option value="États-Unis">États-Unis</option>
                            <option value="France">France</option>
                            <option value="Inde">Inde</option>
                            <option value="Indonésie">Indonésie</option>
                            <option value="Italie">Italie</option>
                            <option value="Japon">Japon</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Pays-Bas">Pays-Bas</option>
                            <option value="Russie">Russie</option>
                            <option value="Royaume-Uni">Royaume-Uni</option>
                            <option value="Turquie">Turquie</option>
                            <option value="Vietnam">Vietnam</option>
                        </select>
                        <div className="invalid-feedback">
                            Veuillez sélectionner un pays valide.
                        </div>
                        </div>
                        <div className="col-md-3">
                        <label htmlFor="zip" className="form-label">
                            Code postal
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="zip"
                            placeholder=""
                            required=""
                        />
                        <div className="invalid-feedback">Code postal requis.</div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <hr className="my-4" />
                    <h4 className="mb-3">Payement</h4>
                    <div className="my-3">
                        <div className="form-check">
                        <input
                            id="credit"
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            defaultChecked=""
                            required=""
                        />
                        <label className="form-check-label" htmlFor="credit">
                            Carte de crédit
                        </label>
                        </div>
                        <div className="form-check">
                        <input
                            id="debit"
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            required=""
                        />
                        <label className="form-check-label" htmlFor="debit">
                            Mastercard
                        </label>
                        </div>
                        <div className="form-check">
                        <input
                            id="paypal"
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            required=""
                        />
                        <label className="form-check-label" htmlFor="paypal">
                            PayPal
                        </label>
                        </div>
                    </div>
                    <div className="row gy-3">
                        <div className="col-md-6">
                        <label htmlFor="cc-name" className="form-label">
                            Nom sur la carte
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cc-name"
                            placeholder=""
                            required=""
                        />
                        <small className="text-body-secondary">
                            Nom complet tel qu'il figure sur la carte
                        </small>
                        <div className="invalid-feedback">
                            Le nom sur la carte est obligatoire
                        </div>
                        </div>
                        <div className="col-md-6">
                        <label htmlFor="cc-number" className="form-label">
                            Numéro de carte de crédit
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cc-number"
                            placeholder=""
                            required=""
                        />
                        <div className="invalid-feedback">
                            Le numéro de la carte de crédit est requis
                        </div>
                        </div>
                        <div className="col-md-3">
                        <label htmlFor="cc-expiration" className="form-label">
                            Expiration
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cc-expiration"
                            placeholder=""
                            required=""
                        />
                        <div className="invalid-feedback">Date d'expiration requise</div>
                        </div>
                        <div className="col-md-3">
                        <label htmlFor="cc-cvv" className="form-label">
                            CVV
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cc-cvv"
                            placeholder=""
                            required=""
                        />
                        <div className="invalid-feedback">Code de sécurité requis</div>
                        </div>
                    </div>
                    <hr className="my-4" />
                    <div id="checking">
                        <div className="check_conditions">
                        <label htmlFor="accepter-conditions">
                            J'accepte les conditions d'utilisation :
                        </label>
                        <input
                            type="checkbox"
                            id="accepter-conditions"
                            name="accepter-conditions"
                            required=""
                        />
                        </div>
                        <div className="check_conditions">
                        <label htmlFor="recevoir-newsletter">
                            Je souhaite recevoir des newsletters par e-mail :
                        </label>
                        <input
                            type="checkbox"
                            id="recevoir-newsletter"
                            name="recevoir-newsletter"
                            defaultChecked="checked"
                        />
                        </div>
                    </div>
                    <hr className="my-4" />
                    <button
                        className="w-100 btn btn-primary btn-lg"
                        id="confirmationBtn"
                        type="submit"
                        data-toggle="modal"
                        data-target="#myModal"
                    >
                        Confirmer
                    </button>
                    </form>
                    <div className="card card-text-success text-center p-3 d-none" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Succès !</h4>
                        </div>
                        <div className="modal-body">
                            <p>Votre demande a été traitée avec succès.</p>
                        </div>
                        <div className="modal-footer">
                            <button
                            type="button"
                            className="btn btn-secondary"
                            id="ok-btn"
                            data-dismiss="modal"
                            >
                            OK
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Formulaire;