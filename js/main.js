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
  let resultados = [];
  switch (event.target.value) {
    case '1':

      resultados = filterByName(ciudades, false)
      break;

    case '2':
      resultados = filterByName(ciudades, true)
      break;

    case '3':
      resultados = filterbyNum(ciudades, true)

      break;

    case '4':
      resultados = filterbyNum(ciudades, false)

      break;

    default:
      resultados = ciudades;
      break;
  }
  printCities(resultados, ulCiudades)
}

function filterByName(pLista, pBoolean) {

  if (pBoolean) {
    return [...pLista].sort((actual, siguiente) => {
      return actual.nombre < siguiente.nombre ? 1 : -1
    })
  } else {
    return [...pLista].sort((actual, siguiente) => {
      return actual.nombre > siguiente.nombre ? 1 : -1
    })
  }
}

function filterbyNum(pList, pBoolean) {
  if (pBoolean) {
    return [...pList].sort((actual, siguiente) => {
      return siguiente.habitantes - actual.habitantes

    })
  } else {
    return [...pList].sort((actual, siguiente) => {
      return actual.habitantes - siguiente.habitantes
    })
  }
}
