const argv = require('./config/yargs').argv;
const color = require('colors');
const todo =  require('./todo/todo');

let comando = argv._[0];

switch( comando ) {
    case 'crear':
        let task = todo.create(argv.descripcion);
    break;

    case 'listar':
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
        let updated = todo.updateTask(argv.descripcion, argv.completado);
        console.log('actualizado', updated);
    break;

    case 'borrar':
        let deleted = todo.deleteTask( argv.descripcion );
        console.log('Borrado', deleted);
    break;

    default: 
         console.log('Comando no reconocido. Elija entre crear | listar | actualizar');
}