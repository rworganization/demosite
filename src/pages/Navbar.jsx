import React from 'react';
import '../styles/sidebars.css';
import { NavLink } from 'react-router-dom';
import * as bootstrap from 'bootstrap';

class Navbar extends React.Component {
        componentDidMount() {
            const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            tooltipTriggerList.forEach(tooltipTriggerEl => {
            new bootstrap.Tooltip(tooltipTriggerEl)
            })
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.forEach(link => link.classList.remove('active'));
                    link.classList.add('active');
                });
            });
        }
        render() { return (
        <div className="flex-shrink-0 p-3 navbar" id="sidebar" style={{ width: 280 }}>
            <NavLink
                to ='/'
                className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom"
            >
                <svg className="bi pe-none me-2" width={30} height={24}>
                <use xlinkHref="#bootstrap" />
                </svg>
                <span className="fs-5 fw-semibold">Demosite</span>
            </NavLink>
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
                        a
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
                        <NavLink
                        to ='/webtables'
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Web tables
                        </NavLink>
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
                        <NavLink
                        to ='/download'
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Upload Download
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                        to ='/dynamic'
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Dynamic Properties
                        </NavLink>
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
                        <NavLink
                        to ='/formulaire'
                        className="link-body-emphasis d-inline-flex text-decoration-none rounded"
                        >
                        Formulaire
                        </NavLink>
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
                    </li>
                    <li>
                        
                        Processed
                        
                    </li>
                    <li>
                        
                        Shipped
                        
                    </li>
                    <li>
                        
                        Returned
                        
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
                        
                        Login
                        
                    </li>
                    <li>
                       
                        Profile
                        
                    </li>
                    <li>
                        
                        Settings
                        
                    </li>
                    <li>
                        
                        API
                        
                    </li>
                    </ul>
                </div>
                </li>
            </ul>
            </div>

    );}
}

export default Navbar;