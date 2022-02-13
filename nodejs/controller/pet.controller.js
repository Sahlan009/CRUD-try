const petstore = require('../config/db') 

function insertPet(req, res) {
    let data = req.body

    let insertQuery = `INSERT INTO pet (status) VALUES (?);`
    petstore.query(insertQuery, data.description, function (error, results, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been inserted', data: data })
}

function listPet(req, res) {
    let selectQuery = `SELECT * FROM store`

    petstore.query(selectQuery, function (error, results, fields) {
        if (error) throw error;
        res.send({ message: 'Data is found', data: results })
    });
}

function updatePet(req, res) {
    let updateQuery = `UPDATE pet SET status = ? WHERE id = ?`
    let data = [req.body.description, req.params.id]  
    
    petstore.query(updateQuery, data, function (error, result, fields) {
        if (error) throw error;
    });

    res.send({ message: 'Data has been updated', data: req.body })
}

function deletePet(req, res) {
    let deleteQuery = `DELETE FROM pet WHERE id = ?`
    let data = [req.params.id]
    petstore.query(deleteQuery, data, function (err, deleted) {
        if (err) throw err;
    });

    res.send({ message: 'Data has been deleted' })
}

module.exports = {
    insertPet,
    listPet,
    updatePet,
    deletePet
}