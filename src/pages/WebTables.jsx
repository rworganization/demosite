import React, { useState } from 'react';
import { ModalWebTables } from './ModalWebTables';
import '../styles/webtables.css'

function WebTables(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
        {
            nom: 'Smith',
            prenom: 'John',
            email: 'johnsmith@gmail.com',
            age: 25,
          },
          {
            nom: 'Doe',
            prenom: 'Jane',
            email: 'jane.doe@yahoo.com',
            age: 30,
          },
          {
            nom: 'Dupont',
            prenom: 'Pierre',
            email: 'pierre.dupont@example.com',
            age: 40,
          },
    ]);
    const [rowToEdit, setRowToEdit] = useState(null);
    const handleDeleteRow = (targetIndex) => {
        setRows(rows.filter((_, idx) => idx !== targetIndex));
    }
    const handleSubmit = (newRow) => {
        rowToEdit === null 
        ? setRows([...rows, newRow])
        : setRows(rows.map((currRow, idx) => {
            if(idx !== rowToEdit) return currRow;
            return newRow;
        }))
    }

    const handleEditRow = (idx) => {
        setRowToEdit(idx);

        setModalOpen(true);
    }
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
                    {
                        rows.map((row, idx) => {
                            return <tr key={idx}>
                                <td>{row.nom}</td>
                                <td>{row.prenom}</td>
                                <td>{row.email}</td>
                                <td>{row.age}</td>
                                <td>
                                    <button
                                        className="btn btn-primary btn-edit"                                        
                                        onClick={() => handleEditRow(idx)}
                                    >Modifier
                                    </button>
                                    <button className="btn btn-danger btn-delete" onClick={() => handleDeleteRow(idx)}>Supprimer</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
                
                    
            </table>
            <button className='btn btn-info' onClick={() => setModalOpen(true)}>Ajouter</button>
            {modalOpen && (
                <ModalWebTables 
                    closeModal={() =>{
                        setModalOpen(false);
                        setRowToEdit(null);
                    }}
                    onSubmit={handleSubmit}
                    defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />)}
        </div>

    );
}

export default WebTables;