const pintarId = async () => {
    const data = await getProducts()
    const contenedor = document.getElementById("producto-contenedor");

    data.forEach(serviciosLocalizacion => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `
                          <p>${serviciosLocalizacion.id}</p>
                       `
      contenedor.appendChild(div);
    });
  };
