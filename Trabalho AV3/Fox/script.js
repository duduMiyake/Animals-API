function buscar() {
    const raca = document.getElementById('input-raca').value;
    const alert = document.getElementById('output')
    // Faz a requisição 
    fetch(`https://randomfox.ca/floof/`)
        .then(response => response.json())
        .then(data => {
            data.image_path = `https://randomfox.ca/images/${raca}.jpg` 
            if (raca < 1 || raca > 121) {
                document.getElementById('output').innerHTML = `<div class="alert alert-danger" role="alert">${"Não existe uma imagem que corresponda a esse numero. Escolha um numero entre 1 a 121."}</div>`;
                
            } else {
                // Obtém a URL da imagem da resposta da API
                alert.innerHTML = ''
                const imageUrl = data.image_path;
                document.getElementById('resultado').innerHTML = `<h4>Raposa numero ${raca} escolhida</h4> <img src="${imageUrl}" alt="${raca}">`;

            }  
        })
        .catch(error => {
            console.log(error);
            alert.innerHTML =   `<div class="alert alert-danger" role="alert"> + ${error.message} + </div>`;
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