
const fs = require('fs');

let listadoTareas = [];

const cargarDB = () => {

	try {
		listadoTareas = require('../db/data.json');
	} catch (error) {
		listadoTareas = [];
	}
}

const guardarDB = () => {

	let data = JSON.stringify(listadoTareas);

	fs.writeFile('db/data.json', data, (err) => {

			if (err) 
				console.log('Error al guardar datos');
			else
				console.log('Datos guardados con éxito');
		});
}

const crear = (descripcion) => {

	cargarDB();

	let porHacer = {

		descripcion,
		completado: false
	};

	listadoTareas.push(porHacer);

	guardarDB();

	return porHacer;
}

const borrar = (descripcion) => {

	cargarDB();

	let nuevaLista = listadoTareas.filter(tarea => tarea.descripcion !== descripcion);

	if (nuevaLista.length<listadoTareas.length) {
		listadoTareas = nuevaLista;
		guardarDB();
		return true
	} else {
		return false;
	}
}

const actualizar = (descripcion, completado = true) => {

	cargarDB();

	let index = listadoTareas.findIndex(tarea => tarea.descripcion === descripcion);

	if (index>=0) {
		listadoTareas[index].completado = completado;
		guardarDB();
		return true
	} else {
		return false;
	}
}

const getListado = () => {

	cargarDB();
	return listadoTareas;
}

module.exports = {

	crear,
	borrar,
	actualizar,
	getListado
}