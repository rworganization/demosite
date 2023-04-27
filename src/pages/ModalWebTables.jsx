import React, { useState } from 'react'
import '../styles/modal.css'

export const ModalWebTables = ({closeModal, onSubmit, defaultValue}) => {
    const [formState, setFormState] = useState(
        defaultValue || {
            nom: "",
            prenom: "",
            email: "",
            age: "",
        });
    const [errors, setErrors] = useState("")
    const validateForm = () =>{
        if(formState.nom && formState.prenom && formState.email && formState.age){
            return true;
        } else {
            let errorFields = [];
            for(const [key,value] of Object.entries(formState)) {
                if(!value) {
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(", "))
            return false;
        }
    }
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value, 
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validateForm()) return;
        onSubmit(formState)
        closeModal();
    }
  return (
    <div 
        className='modal-container' 
        onClick={(e) => {
            if (e.target.className === "modal-container") closeModal()
        }}
    >
        <div className="modal-item">
           <form>
                <div className='form-group'>
                    <label htmlFor='name'>Nom :</label>
                    <input name="nom" value={formState.nom} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label for="prenom">Prénom :</label>
                    <input type="text" id="prenom" name="prenom" value={formState.prenom} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label for="email">Email :</label>
                    <input type="email" id="email" name="email" value={formState.email} onChange={handleChange}/>
                </div>
                <div className='form-group'>
                    <label for="age">Age :</label>
                    <input type="number" id="age" name="age" value={formState.age} onChange={handleChange}/>
                </div>
                {errors && <div className='error'>{`Veuillez renseigner : ${errors}`}</div>}
                <button type='submit' className='btn' onClick={handleSubmit}>Confirmer</button>
           </form>
           
        </div>
    </div>
  )
}
