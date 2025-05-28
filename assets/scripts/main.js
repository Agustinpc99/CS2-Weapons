
let tarjetero = document.querySelector(".tarjetero")
let tarjetas = ""
let buscador = document.querySelector(".buscador")

fetch("https://bymykel.com/CSGO-API/api/es-MX/skins.json")
    .then(res => res.json())
    .then(data => {
        let weapons = data
        console.log(tarjetero)
        function crearTarjeta(armas){
            let cartas = ""
            for(let arma of armas){
                cartas += `<article class="xl:w-[40%] bg-yellow-400 w-[95%] xl:w-[30%] h-[50vh] xl:h-[55vh]">
                <img src="${arma.image}">
                <h2 class="text-center text-lg font-bold">${arma.name}</h2>
                <p class="text-sm">${arma.description}</p>
            </article>`
            }
            return cartas
        }
        tarjetas = crearTarjeta(weapons)
        function renderizar(elemento,tarjetas) {
            elemento.innerHTML = tarjetas
        }
        renderizar(tarjetero,tarjetas)
        function filtrarArmaNombre(armas,busqueda){
            return armas.filter((armas)=> armas.name.toLowerCase().startsWith(busqueda.toLowerCase()))
        }
        buscador.addEventListener("input",()=>{
            let armasPorNombre = filtrarArmaNombre(weapons,buscador.value)
            renderizar(tarjetero,crearTarjeta(armasPorNombre))
            if(armasPorNombre == []){
                renderizar(tarjetero,tarjetas)
            }
        })
        
    })








