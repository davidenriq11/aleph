let height = 300;
let width = Math.ceil(height * 1.618033);
let statusStr = document.querySelector('.status');

function getRandom() {
  return Math.floor(Math.random()*256);
};

function getColor() {
  let color1 = getRandom();
  let color2 = getRandom();
  let color3 = getRandom();
  return `rgb(${color1},${color2},${color3})`;
};

function getRow() {
  let filaStr = '<tr>';
  for (let w = 0; w < width; w++) {
    let color = getColor();
    filaStr += `<td style="background-color: ${color}"></td>`;
  };
  filaStr += '</tr>';
  return filaStr;
};

function getTable() {
  let tabla = '<table>';
  for (let h = 0; h < height; h++) {
    let fila = getRow();
    tabla += fila;
  };
  tabla += '</table>'
  let imagenBendita = document.querySelector('.imagen-bendita');
  imagenBendita.innerHTML = tabla;
};

getTable();

let boton = document.querySelector('.boton');
boton.addEventListener('click', function() {
    window.location.reload(true);
});
