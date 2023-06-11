document.getElementById('form-busca').addEventListener('click', function(event) {
  
    const raca = document.getElementById('input-raca').value;
  
    
    fetch(`https://api.thecatapi.com/v1/breeds/search?q=${raca}`)
      .then(response => response.json())
      .then(data => {
      
        if (data.length > 0) {
          
          const breedId = data[0].id;
  
          
          fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
            .then(response => response.json())
            .then(data => {
              
              if (data.length > 0) {
                
                const imageUrl = data[0].url;
  
                
                const resultado = document.getElementById('resultado');
                resultado.innerHTML = `<h4>Raça escolhida: ${raca}</h4> <img src="${imageUrl}" alt="${raca}">`;
              } else {
                
                const resultado = document.getElementById('resultado');
                resultado.innerHTML = `<p>Nenhuma imagem encontrada para a raça ${raca}.</p>`;
              }
            })
            .catch(error => {
              
              console.error(error);
            });
        } else {
          
          const resultado = document.getElementById('resultado');
          resultado.innerHTML = `<p>Nenhuma raça encontrada com o nome ${raca}.</p>`;
        }
      })
      .catch(error => {
        
        console.error(error);
      });
  }); 