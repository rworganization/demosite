import React from 'react';
import '../styles/webtables.css'

function WebTables(props) {
  
    return (
        <div className="container">
            <h2>Tableau interactif</h2>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Âge</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Smith</td>
                    <td>John</td>
                    <td>johnsmith@gmail.com</td>
                    <td>25</td>
                    <td>
                    <button
                        className="btn btn-primary btn-edit"
                        data-toggle="modal"
                        data-target="#editModal"                    >
                        Modifier
                    </button>
                    <button className="btn btn-danger btn-delete">Supprimer</button>
                    </td>
                </tr>
                <tr>
                    <td>Doe</td>
                    <td>Jane</td>
                    <td>jane.doe@yahoo.com</td>
                    <td>30</td>
                    <td>
                    <button
                        className="btn btn-primary btn-edit"
                        data-toggle="modal"
                        data-target="#editModal"
                    >
                        Modifier
                    </button>
                    <button className="btn btn-danger btn-delete">Supprimer</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

    );
}

export default WebTables;