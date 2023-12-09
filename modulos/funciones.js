

export function pintarTarjetas(arregloEventos, divp) {

    divp.innerHTML = ""
    if (arregloEventos.length == 0) {

        divp.innerHTML = `<div class="hola"><p class="textoTarjetaNoEncontrada" > "No events found,  try again! </p> </div>
          `;
      }
    for (let i = 0; i < arregloEventos.length; i += 4) {
        let carruselItem

        if (i < 4) {
            carruselItem = document.createElement("div")
            carruselItem.classList.add("carousel-item", "active" )

        } else {
            carruselItem = document.createElement("div")
            carruselItem.classList.add("carousel-item" )
        }



        let carruselItem2 = document.createElement("div")
        carruselItem2.classList.add("cards2","row","p-3", )


        for (let j = i; j < i + 4; j++) {
            if (arregloEventos[j] != undefined) {
                let card = document.createElement("div")
                card.classList.add("card", "col-12", "col-md-12", "col-lg-3", )
                card.innerHTML = `
            <div class="card-img" >
            <img src="${arregloEventos[j].image}" class="imagen w-100"  alt="...">
            </div>             
        <div class="titulo card-sm-body bg-secondary ">
        <h5 class=" card-title text-center mt-2 text-white">${arregloEventos[j].name} </h5>
        </div>
        <div class="cuerpo  card-md-body bg-dark">
            
            <p class="descrip card-text text-center text-white">${arregloEventos[j].description}</p>
        </div>
        <div class="d-flex justify-content-md-between  p-2 bg-secondary">
            <a href="details.html?id=${arregloEventos[j]._id}" class="btn btn-dark">Details</a>
            <p class="card-text text-white">${arregloEventos[j].price}</p>
        </div>`
                carruselItem2.appendChild(card)
            }
        }
        carruselItem.appendChild(carruselItem2)


        divp.appendChild(carruselItem)
    }
}