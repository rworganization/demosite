import React from 'react';
import '../styles/sidebars.css'
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div className="flex-shrink-0 p-3 navbar" id="sidebar" style={{ width: 280 }}>
            <a
                href="/#"
                className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
            >
                <svg className="bi pe-none me-2" width={30} height={24}>
                <use xlinkHref="#bootstrap" />
                </svg>
                <span className="fs-5 fw-semibold">Demosite</span>
            </a>
            <ul className="list-unstyled ps-0">
                <li className="mb-1">
                <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#home-collapse"
                    aria-expanded="true"
                >
                    Elements
                </button>
                <div className="collapse show" id="home-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                        <NavLink
                        to='/textbox'
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Text box
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to ='/checkbox'
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Check box
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to ='/radiobutton'
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Radio button
                        </NavLink>
                    </li>
                    <li>
                        <a
                        href="src/webtables.html"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Web tables
                        </a>
                    </li>
                    <li>
                        <NavLink
                        to ='/buttons'
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Buttons
                        </NavLink>
                    </li>
                    <li>
                        <a
                        href="src/download.html"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Upload Download
                        </a>
                    </li>
                    <li>
                        <a
                        href="src/dynamic.html"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Dynamic Properties
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="mb-1">
                <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#dashboard-collapse"
                    aria-expanded="false"
                >
                    Forms
                </button>
                <div className="collapse" id="dashboard-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                        <a
                        href="src/formulaire.html"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Formulaire
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="mb-1">
                <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#orders-collapse"
                    aria-expanded="false"
                >
                    Alerts, frame, windows
                </button>
                <div className="collapse" id="orders-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                        <a href="#" className="link-body-emphasis d-inline-flex text-decoration-none rounded">                      New
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Processed
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Shipped
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Returned
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
                <li className="border-top my-3" />
                <li className="mb-1">
                <button
                    className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#account-collapse"
                    aria-expanded="false"
                >
                    Application
                </button>
                <div className="collapse" id="account-collapse">
                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li>
                        <a
                        href="#"
                        className="link-dark d-inline-flex text-decoration-none rounded"
                        >
                        Login
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="link-dark d-inline-flex text-decoration-none rounded"
                        >
                        Profile
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="link-dark d-inline-flex text-decoration-none rounded"
                        >
                        Settings
                        </a>
                    </li>
                    <li>
                        <a
                        href="#"
                        className="link-dark d-inline-flex text-decoration-none rounded"
                        >
                        API
                        </a>
                    </li>
                    </ul>
                </div>
                </li>
            </ul>
            </div>

    );
}

export default Navbar;