// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()

const confirmationBtn = document.getElementById("confirmationBtn");
const targetElement = document.getElementById("myModal");
const okBtn = document.getElementById("ok-btn");

confirmationBtn.addEventListener("click", function() {
  // Vérifier si l'opération a réussi, puis supprimer la classe "d-none"
      targetElement.classList.remove("d-none");
  

});

okBtn.addEventListener("click", function() {
  // Vérifier si l'opération a réussi, puis supprimer la classe "d-none"
  
    targetElement.classList.add("d-none");
  
});
