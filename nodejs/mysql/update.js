const petsore = require('../config/db')

let updateQuery = `UPDATE pet SET status = ? WHERE id = ?`
let data = ['Swagger Pet Store']
petsore.query(updateQuery, data, function(err,updated) {
    if (err) throw err;
    console.log(updated);
});

let updateQuery = `UPDATE store SET status = ? WHERE id = ?`
let data = ['Swagger Pet Store']
petsore.query(updateQuery, data, function(err,updated) {
    if (err) throw err;
    console.log(updated);
});