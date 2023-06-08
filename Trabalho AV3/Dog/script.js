document.getElementById('form-busca').addEventListener('click', function(event) {

    // Obtém o valor digitado no campo de entrada
    const raca = document.getElementById('input-raca').value;
      console.log(raca)
    // Faz a requisição à API
    fetch(`https://dog.ceo/api/breed/${raca}/images/random`)
      .then(response => response.json())
      .then(data => {
        // Obtém a URL da imagem da resposta da API
        console.log(data);
        const imageUrl = data.message;
  
        // Exibe a raça e a imagem no elemento "resultado"
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `<h4>Raça escolhida: ${raca}</h4> <img src="${imageUrl}"" alt="${raca}" id="imagem">`;
      })
      .catch(error => {
        // Lida com erros, caso ocorram
        console.error(error);
      });
  });