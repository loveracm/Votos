var votos = {
    'Fuerza Estudiantil': 0,
    'Blanco': 0
};

function registrarVoto() {
    var selectedOption = document.querySelector('input[name="voto"]:checked');

    if (selectedOption) {
        var voto = selectedOption.value;
        votos[voto]++;
        alert('Voto registrado por ' + voto + '.');
    } else {
        alert('Por favor, selecciona una opción antes de votar.');
    }
}

function mostrarEstadisticas() {
    var resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    var labels = Object.keys(votos);
    var valores = Object.values(votos);

    var ul = document.createElement('ul');
    for (var i = 0; i < labels.length; i++) {
        var li = document.createElement('li');
        li.textContent = labels[i] + ': ' + valores[i] + ' votos';
        ul.appendChild(li);
    }

    resultadosDiv.appendChild(ul);
}

function finalizarVotaciones() {
    mostrarEstadisticas();

    // Configuración del gráfico de pastel
    var ctx = document.getElementById('graficoPastel').getContext('2d');
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(votos),
            datasets: [{
                data: Object.values(votos),
                backgroundColor: ['#FF6384', '#36A2EB'], // Puedes personalizar los colores
                hoverBackgroundColor: ['#FF6384', '#36A2EB']
            }]
        },
        options: {
            responsive: false, // Para mantener un tamaño fijo del gráfico
            maintainAspectRatio: false, // Evitar que el gráfico se distorsione
            title: {
                display: true,
                text: 'Resultados de las votaciones'
            }
        }
    });

    alert('Votaciones finalizadas. ¡Mira el gráfico de pastel!');
}
