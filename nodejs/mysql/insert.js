const petstore = require('../config/db')

let data = [
    {status: "ada"},
]

data.forEach(value => {
    let insertQuery = `INSERT INTO pet (description) VALUES (?);`
    petstore.query(insertQuery, value.description, function(error,result,fields){
        if (error) throw error 
        console.log("Data base has been inserted "); 
    })
})

data.forEach(value => {
    let insertQuery = `INSERT INTO store (description) VALUES (?);`
    petstore.query(insertQuery, value.description, function(error,result,fields){
        if (error) throw error 
        console.log("Data base has been inserted "); 
    })
})