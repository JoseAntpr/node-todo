const fs = require('fs');

let todoList = [];

const saveDB = () => {
    let data = JSON.stringify(todoList);

    fs.writeFile('db/data.json', data, (err) => {
        if( err ) throw new Error('No se pudo grabar', err);
    });
}

const create = ( descripcion ) => {

    loadDB();

    let todo = {
        descripcion,
        completado: false
    };

    todoList.push( todo );

    saveDB();

    return todoList;
}

const loadDB = () => {

    try{
        todoList = require('../db/data.json');
    } catch(error) {
        todoList = [];
    }

    console.log(todoList);
}

const getList = () => {
    loadDB();
    return todoList;
}

const updateTask = ( descripcion, completado = true ) => {
    loadDB();

    let index = todoList.findIndex( task => {
        return task.descripcion === descripcion;
    });

    if( index >= 0 ) {
        todoList[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    create,
    getList,
    updateTask
}