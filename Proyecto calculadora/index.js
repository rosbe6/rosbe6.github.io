const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const c = document.getElementById('c');
const d = document.getElementById('d');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const botonapretado = boton.textContent;

        if(boton.id === 'c'){
            pantalla.textContent = '0'
            return;
        }

        if(boton.id === 'd'){
            if (pantalla.textContent.length === 1){
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === 'igual'){
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Error JAJA";
            }
            return;
        }
        

        if (pantalla.textContent ==='0' || pantalla.textContent === 'Error JAJA'){
             pantalla.textContent = botonapretado;
        } else{
            pantalla.textContent += botonapretado;
        }
        
    })
})

