
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por_hacer/por_hacer');

let comando = argv._[0];

switch (comando) {

	case 'crear':
	
		let tarea = porHacer.crear(argv.descripcion);
		console.log(tarea);
		break;

	case 'borrar':
		
		let borrado = porHacer.borrar(argv.descripcion);
		console.log(borrado);
		break;

	case 'actualizar':
		
		let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
		console.log(actualizado);
		break;

	case 'listar':

		let listado = porHacer.getListado();

		for (let tarea of listado) {

			console.log('================'.green);
			console.log(tarea.descripcion);
			console.log('Estado: ', tarea.completado);
			console.log('================'.green);
		}

		break;

	default:
		console.log('Comando no reconocido');
}