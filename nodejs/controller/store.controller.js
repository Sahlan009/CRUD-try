const petstore = require('../config/db') 

function insertStore(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO store (order) VALUES (?);`
    petstore.query(insertQuery, data.description, function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

function listPet(req, res) {
    let selectQuery = `SELECT * FROM store`

    petsore.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}

function updatePet(req, res) {
    let updateQuery = `UPDATE store SET order = ? WHERE id = ?`
    let data = [req.body.description, req.params.id]  
    
    petstore.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

function deletePet(req, res) {
    let deleteQuery = `DELETE FROM store WHERE id = ?`
    let data = [req.params.id]
    petstore.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertStore,
    listStore,
    updateStore,
    deleteStore
}