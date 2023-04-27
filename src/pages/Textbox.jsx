import React, { useRef } from 'react';
import '../styles/checkout.css'

function Textbox(props) {
    const formRef = useRef(null);

    const handleSubmit = (event) => {
      event.preventDefault();
      if (formRef.current.checkValidity()) {
        // Handle successful form submission here
        formRef.current.reset();
      } else {
        formRef.current.classList.add('was-validated');
      }
    };
    return (
        <div className="container">
            <div className="col-md-7 col-lg-8">
                <h4 className="mb-3">Text box</h4>
                <form className="needs-validation"  ref={formRef} onSubmit={handleSubmit} noValidate="">
                <div className="row g-3">
                    <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                        First name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        defaultValue=""
                        required=""
                    />
                    <div className="invalid-feedback">Valid first name is required.</div>
                    </div>
                    <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                        Last name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        defaultValue=""
                        required=""
                    />
                    <div className="invalid-feedback">Valid last name is required.</div>
                    </div>
                    <div className="col-12">
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <div className="input-group has-validation">
                        <span className="input-group-text">@</span>
                        <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        required=""
                        />
                        <div className="invalid-feedback">Your username is required.</div>
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
                        placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                    </div>
                    </div>
                    <div className="col-12">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required=""
                    />
                    <div className="invalid-feedback">
                        Please enter your shipping address.
                    </div>
                    </div>
                    <button className="w-50 btn btn-primary btn-lg" type="submit">
                    Continue
                    </button>
                </div>
                </form>
            </div>
        </div>

    );
}

export default Textbox;