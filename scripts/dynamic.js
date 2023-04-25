var btn1 = document.getElementById("waiting-5s-btn");
var btn2 = document.getElementById("click-btn");

btn2.addEventListener('click', () => {
    if(btn2.className == 'btn btn-primary'){
        btn2.className = 'btn btn-danger';
    }else if(btn2.className == 'btn btn-danger'){
        btn2.className = 'btn btn-success';
    }else{
        btn2.className = 'btn btn-primary';
    }
    
});

setTimeout(function(){    
        btn1.className = 'btn btn-primary';
        btn1.innerHTML = 'Télécharger';     
}, 5000)

btn1.addEventListener('click', () => {
    btn1.className = 'btn btn-secondary';
    btn1.innerHTML = 'Attendre 5 s';    
    setTimeout(function(){    
        btn1.className = 'btn btn-primary';
        btn1.innerHTML = 'Télécharger';     
    }, 5000)
});