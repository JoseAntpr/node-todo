const argv = require('./config/yargs').argv;
const color = require('colors');
const todo =  require('./todo/todo');

console.log(argv);

let comando = argv._[0];

switch( comando ) {
    case 'crear':
        let task = todo.create(argv.descripcion);
        console.log('Crear por hacer', task);
    break;

    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        let list = todo.getList();
        for( let task of list) {
            console.log('======Por Hacer======'.yellow);
            console.log(color.blue( task.descripcion ));
            showState = task.completado ? color.green(task.completado) : color.red(task.completado)
            console.log('Estado: '.blue, showState);
            console.log('======================'.yellow)
        }
    break;

    case 'actualizar':
        console.log('Crear por hacer');
    break;

    default: 
         console.log('Comando no reconocido. Elija entre crear | listar | actualizar');
}