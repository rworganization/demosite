function uploadFile() {
    var input = document.getElementById("uploadFile");
    var fileName = document.getElementById("fileName");
    var button = document.getElementById("uploadButton"); 
    button.innerHTML = "Fichier uploadé";
    fileName.innerHTML = "Fichier "+ input.files[0].name +" uploadé";
    button.className = 'btn btn-secondary';
}