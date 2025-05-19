function aggTarea() {
	const input = document.getElementById('TareaNueva');
  	const texto = input.value.trim();
 
  	if (texto === '') {
    	alert('No se pudo agregar, porfavor escribe una tarea');
    return;
  }
 
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${texto}</span>
    <button class="ok-btn" onclick="eliminarTarea(this)">Ok</button>
  `;
 
  document.getElementById('listaTareas').appendChild(li);
  input.value = '';
}
 
function eliminarTarea(boton) {
  const li = boton.parentElement;
  li.remove();
}