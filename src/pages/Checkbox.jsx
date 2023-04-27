import React from 'react';
import { useState, useEffect } from 'react';

function Checkbox(props) {
    const [parentCheckboxes, setParentCheckboxes] = useState([]);
    const [childCheckboxes, setChildCheckboxes] = useState([]);
    
    function handleParentCheckboxChange(event) {
        // Récupère toutes les checkboxes enfants de la checkbox parent
        const childCheckboxes = document.querySelectorAll(`.${event.target.classList[1]}.child-checkbox`);
    
        // Coche ou décoche toutes les checkboxes enfants en fonction de la checkbox parent
        childCheckboxes.forEach(childCheckbox => {
          childCheckbox.checked = event.target.checked;
        });
      }
  
  useEffect(() => {
    // Récupère toutes les checkboxes parent
    const parentCheckboxes = document.querySelectorAll('.form-check-input.parent-checkbox');
    setParentCheckboxes(Array.from(parentCheckboxes));

    // Récupère toutes les checkboxes enfants
    const childCheckboxes = document.querySelectorAll('.form-check-input.child-checkbox');
    setChildCheckboxes(Array.from(childCheckboxes));
  }, []);

  useEffect(() => {
    // Ajoute un écouteur d'événement pour chacune des checkboxes enfants
    childCheckboxes.forEach(childCheckbox => {
      childCheckbox.addEventListener('change', handleChildCheckboxChange);
    });

    // Nettoie les écouteurs d'événements lorsque le composant est démonté
    return () => {
      childCheckboxes.forEach(childCheckbox => {
        childCheckbox.removeEventListener('change', handleChildCheckboxChange);
      });
    };
  }, [childCheckboxes]);

  useEffect(() => {
    // Ajoute un écouteur d'événement pour chacune des checkboxes parent
    parentCheckboxes.forEach(parentCheckbox => {
      parentCheckbox.addEventListener('change', handleParentCheckboxChange);
    });

    // Nettoie les écouteurs d'événements lorsque le composant est démonté
    return () => {
      parentCheckboxes.forEach(parentCheckbox => {
        parentCheckbox.removeEventListener('change', handleParentCheckboxChange);
      });
    };
  }, [parentCheckboxes]);

  function handleChildCheckboxChange(event) {
    // Récupère la checkbox parent
    const parentCheckbox = event.target.closest('.parent-checkbox');

    // Si toutes les checkboxes enfants sont cochées, coche la checkbox parent
    if (document.querySelectorAll(`.${parentCheckbox.classList[1]}.child-checkbox:checked`).length === document.querySelectorAll(`.${parentCheckbox.classList[1]}.child-checkbox`).length) {
      parentCheckbox.checked = true;
    } else {
      parentCheckbox.checked = false;
    }
    
  }
    return (
        <div className="container">
  <h4 className="mb-3">checkbox</h4>
  
  <div className="col-md-7 col-lg-8 list-group">
    <label className="list-group-item d-flex gap-2">
      <input
        className="form-check-input flex-shrink-0 parent-checkbox"
        type="checkbox"
        defaultValue=""
        defaultChecked=""
      />
      <span>
        First checkbox
        <small className="d-block text-body-secondary">
          With support text underneath to add more detail
        </small>
      </span>
      <div className="form-check form-check-inline ms-auto">
        <input
          className="form-check-input child-checkbox"
          type="checkbox"
          id="inlineCheckbox1"
          defaultValue="option1"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox1">
          Child checkbox 1 
        </label> /*FIXME */
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input child-checkbox"
          type="checkbox"
          id="inlineCheckbox2"
          defaultValue="option2"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox2">
          Child checkbox 2 /*FIXME */
        </label>
      </div>
    </label>
    <label className="list-group-item d-flex gap-2">
      <input
        className="form-check-input flex-shrink-0 parent-checkbox"
        type="checkbox"
        defaultValue=""
      />
      <span>
        Second checkbox
        <small className="d-block text-body-secondary">
          Some other text goes here
        </small>
      </span>
      <div className="form-check form-check-inline ms-auto">
        <input
          className="form-check-input child-checkbox"
          type="checkbox"
          id="inlineCheckbox3"
          defaultValue="option3"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox3">
          Child checkbox 1 /*FIXME */
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input child-checkbox"
          type="checkbox"
          id="inlineCheckbox4"
          defaultValue="option4"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox4">
          Child checkbox 2 /*FIXME */
        </label>
      </div>
    </label>
    <label className="list-group-item d-flex gap-2">
      <input
        className="form-check-input flex-shrink-0 parent-checkbox"
        type="checkbox"
        defaultValue=""
      />
      <span>
        Third checkbox
        <small className="d-block text-body-secondary">
          And we end with another snippet of text
        </small>
      </span>
      <div className="form-check form-check-inline ms-auto">
        <input
          className="form-check-input child-checkbox"
          type="checkbox"
          id="inlineCheckbox5"
          defaultValue="option5"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox5">
          Child checkbox 1 /*FIXME */
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input child-checkbox"
          type="checkbox"
          id="inlineCheckbox6"
          defaultValue="option6"
        />
        <label className="form-check-label" htmlFor="inlineCheckbox6">
          Child checkbox 2 /*FIXME */
        </label> 
      </div>
    </label>
  </div>
</div>

    );
}

export default Checkbox;