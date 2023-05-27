const select = document.querySelector('#select');
const ulCiudades = document.querySelector('.ciudades');
const divMapa = document.querySelector('.mapa iframe');
const urlInicio = divMapa.src;

function printCities(pList, pDom) {
  pDom.innerHTML = "";
  pList.forEach(city => printOneCity(city, pDom))
}

function printOneCity(pCity, pDom) {

  const li = document.createElement('li');
  li.textContent = `${pCity.nombre} - ${pCity.habitantes} habitantes`
  li.dataset.mapa = pCity.mapa;
  li.addEventListener('click', loadMap)

  pDom.appendChild(li);

}

function loadMap(event) {
  let codigoMapa = (event.target.dataset.mapa);
  divMapa.src = urlInicio + codigoMapa;

}
printCities(ciudades, ulCiudades);

select.addEventListener('change', selectOption);

function selectOption(event) {

}




