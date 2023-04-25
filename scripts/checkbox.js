// récupérer toutes les checkboxes enfants
const childCheckboxes = document.querySelectorAll('.form-check-input.child');

// ajouter un écouteur d'événement pour chacune des checkboxes enfants
childCheckboxes.forEach(childCheckbox => {
  childCheckbox.addEventListener('change', (event) => {
    // récupérer la checkbox parent
    const parentCheckbox = event.target.closest('.form-check-input.parent');
    
    // si toutes les checkboxes enfants sont cochées, cocher la checkbox parent
    if (document.querySelectorAll(`.${parentCheckbox.classList[1]}.child:checked`).length === document.querySelectorAll(`.${parentCheckbox.classList[1]}.child`).length) {
      parentCheckbox.checked = true;
    } else {
      parentCheckbox.checked = false;
    }
  });
});

// récupérer toutes les checkboxes parent
const parentCheckboxes = document.querySelectorAll('.form-check-input.parent');

// ajouter un écouteur d'événement pour chacune des checkboxes parent
parentCheckboxes.forEach(parentCheckbox => {
  parentCheckbox.addEventListener('change', (event) => {
    // récupérer toutes les checkboxes enfants de la checkbox parent
    const childCheckboxes = document.querySelectorAll(`.${parentCheckbox.classList[1]}.child`);
    
    // cocher ou décocher toutes les checkboxes enfants en fonction de la checkbox parent
    childCheckboxes.forEach(childCheckbox => {
      childCheckbox.checked = parentCheckbox.checked;
    });
  });
});