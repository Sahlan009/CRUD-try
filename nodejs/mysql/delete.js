const petsore = require('../config/db');
const petsore = require('../config/db')

let deleteQuery = `DELETE FROM pet WHERE id = ?`
let data = [10]
petsore.query(deleteQuery, data, function(err,deleted) {
    if (err) throw err;
    console.log(deleted);
});

let deleteQuery = `DELETE FROM store WHERE id = ?`
let data = [10]
petsore.query(deleteQuery, data, function(err,deleted) {
    if (err) throw err;
    console.log(deleted);
});