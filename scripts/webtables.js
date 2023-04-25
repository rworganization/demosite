// Récupération des éléments du DOM
const editModal = new bootstrap.Modal(document.getElementById('editModal'), {});

const btnSave = document.getElementById('btn-save');
const btnsEdit = document.querySelectorAll('.btn-edit');
const btnsDelete = document.querySelectorAll('.btn-delete');

// Fonction pour remplir le formulaire d'édition
const fillEditForm = (tr) => {
   
  const tds = tr.querySelectorAll('td');
  const name = tds[0].textContent;
  const firstName = tds[1].textContent;
  const email = tds[2].textContent;
  const age = tds[3].textContent;

  const nameInput = editModal.querySelector('#name');
  const firstNameInput = editModal.querySelector('#firstname');
  const emailInput = editModal.querySelector('#email');
  const ageInput = editModal.querySelector('#age');

  nameInput.value = name;
  firstNameInput.value = firstName;
  emailInput.value = email;
  ageInput.value = age;
};

// Ajout de l'événement d'édition sur chaque bouton
btnsEdit.forEach((btnEdit) => {
  btnEdit.addEventListener('click', (event) => {
    
    const tr = event.target.closest('tr');
    const fields = tr.querySelectorAll('td');
    const editForm = document.getElementById('edit-form');
    
    // Récupération des valeurs des champs de la ligne sélectionnée
    const nom = fields[0].textContent;
    const prenom = fields[1].textContent;
    const email = fields[2].textContent;
    const age = fields[3].textContent;
    
    // Pré-remplissage des champs du formulaire d'édition
    editForm.querySelector('#edit-nom').value = nom;
    editForm.querySelector('#edit-prenom').value = prenom;
    editForm.querySelector('#edit-email').value = email;
    editForm.querySelector('#edit-age').value = age;
    
    // Affichage de la modale d'édition
    editModal.show();
  });
});

// Ajout de l'événement de suppression sur chaque bouton
btnsDelete.forEach((btnDelete) => {
  btnDelete.addEventListener('click', (event) => {
    const tr = event.target.closest('tr');
    tr.remove();
  });
});

// Ajout de l'événement de sauvegarde
btnSave.addEventListener('click', () => {
  const nameInput = editModal.querySelector('#name');
  const firstNameInput = editModal.querySelector('#firstname');
  const emailInput = editModal.querySelector('#email');
  const ageInput = editModal.querySelector('#age');

  const name = nameInput.value;
  const firstName = firstNameInput.value;
  const email = emailInput.value;
  const age = ageInput.value;

  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');
  const tdName = document.createElement('td');
  const tdFirstName = document.createElement('td');
  const tdEmail = document.createElement('td');
  const tdAge = document.createElement('td');
  const tdActions = document.createElement('td');
  const btnEdit = document.createElement('button');
  const btnDelete = document.createElement('button');

  tdName.textContent = name;
  tdFirstName.textContent = firstName;
  tdEmail.textContent = email;
  tdAge.textContent = age;

  btnEdit.classList.add('btn', 'btn-primary', 'btn-edit');
  btnEdit.setAttribute('data-toggle', 'modal');
  btnEdit.setAttribute('data-target', '#editModal');
  btnEdit.textContent = 'Editer';

  btnDelete.classList.add('btn', 'btn-danger', 'btn-delete');
  btnDelete.textContent = 'Supprimer';

  tdActions.appendChild(btnEdit);
  tdActions.appendChild(btnDelete);

  tr.appendChild(tdName);
  tr.appendChild(tdFirstName);
  tr.appendChild(tdEmail);
  tr.appendChild(tdAge);
  tr.appendChild(tdActions);

  tbody.appendChild(tr);

  // Effacement des champs du formulaire
  nameInput.value = '';
  firstNameInput.value = '';
  emailInput.value = '';
  ageInput.value = '';

  // Fermeture de la fenêtre modale
  editModal.dispatchEvent(new Event('hide.bs.modal'));
});
