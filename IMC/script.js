document.addEventListener('DOMContentLoaded', function() {
    var btn = document.getElementById('btn');
    var peso = document.getElementById('peso');
    var altura = document.getElementById('altura');
    var edad = document.getElementById('edad');
    var resultado = document.getElementById('resultado');
    var cargando1 = document.querySelector('.cargando');
    var abedruano = document.getElementById('abedruano_rr');

    btn.addEventListener('click', function() {
        var pesoco = peso.value;
        var alturaco = altura.value;
        var edadco = edad.value;
        var genero = document.querySelector('input[name="genero"]:checked');
        var generoco = genero ? genero.value : 'No especificado';

        if (!genero) {
            resultado.style.display = 'block';
            resultado.textContent = 'Por favor, selecciona tu género.';
            return;
        }

        cargando1.style.visibility = 'visible';
        cargando1.style.display = 'grid';

        setTimeout(function() {
            cargando1.style.display = 'none';
            resultado.style.visibility = 'visible';
            resultado.style.display = 'block';
            abedruano.style.display = 'block';

            // Calcular el peso ideal usando la lógica actual
            var tmb;
            if (generoco === 'hombre') {
                tmb = (alturaco - 100) - ((alturaco - 150) / 4);  // Cálculo original para hombres
            } else if (generoco === 'mujer') {
                tmb = (alturaco - 100) - ((alturaco - 150) / 2);  // Cálculo original para mujeres
            }

            // Mostrar el resultado del cálculo
            if (pesoco > tmb) {
                resultado.textContent = 'Tu peso está por encima de lo normal. Tu peso ideal debería ser de ' + tmb.toFixed(1) + ' kl.';
            } else if (pesoco < tmb) {
                resultado.textContent = 'Tu peso está por debajo de lo normal. Tu peso ideal debería ser de ' + tmb.toFixed(1) + ' kl.';
            } else {
                resultado.textContent = '¡Tu peso es perfecto! Tu peso ideal es aproximadamente ' + tmb.toFixed(1) + ' lbs.';
            }

        }, 1000);  // Simulación de carga de 1 segundo
    });
});
