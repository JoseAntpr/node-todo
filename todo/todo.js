const fs = require('fs');

let todoList = [];

const saveDB = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if( err ) throw new Error('No se pudo grabar', err);
    });
}

const create = ( descripcion ) => {
    let todo = {
        descripcion,
        completado: false
    };

    todoList.push( todo );

    saveDB();

    return todoList;
}

module.exports = {
    create
}