function buscar() {

    // Obtém o valor digitado no campo de entrada
    const raca = document.getElementById('input-raca').value;
    // Faz a requisição à API
    fetch(`https://randomfox.ca/floof/`)
        .then(response => response.json())
        .then(data => {
            // Obtém a URL da imagem da resposta da API
            data.image_path = `https://randomfox.ca/images/${raca}.jpg`
            const imageUrl = data.image_path;

            // Exibe a raça e a imagem no elemento "resultado"
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `<h4>Raça escolhida: ${raca}</h4> <img src="${imageUrl}"" alt="${raca}">`;
        })
        .catch(error => {
            console.log(error);
        });
};

function buscarAleatorio() {
    // Faz a requisição à API
    fetch(`https://randomfox.ca/floof/`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.image;

            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `<img src="${imageUrl}">`;
        })
        .catch(error => {
            console.log(error);
        });
};