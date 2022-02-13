const petstore = require('../config/db');
const petstore = require('../config/db')

let createQuery = `
CREATE TABLE IF NOT EXISTS pet (
    id int NOT NULL AUTO_INCREMENT,
    pet_id int NOT NULL AUTO_INCREMENT,
    category_id int NOT NULL,
    name varchar(50) NOT NULL,
    status varchar(20) NOT NULL,
    quantity int NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    )
    COLLATE = 'utf8mb4_general_ci'
    ;`

let createQuery = `
CREATE TABLE IF NOT EXISTS store (
    id int NOT NULL AUTO_INCREMENT,
    pet_id int NOT NULL,
    quantity int NOT NULL,
    ship_date datetime DEFAULT NULL,
    order varchar(20) NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    )
    COLLATE = 'utf8mb4_general_ci'
    ;`


  let createQuery = `
CREATE TABLE IF NOT EXISTS user (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(30) NOT NULL,
    first_name varchar(30) NOT NULL,
    last_name varchar(30) NOT NULL,
    email varchar(100) NOT NULL,
    password varchar(30) NOT NULL,
    phone varchar(20) NOT NULL,
    created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
    )
  COLLATE = 'utf8mb4_general_ci'
  ;`


 petstore.query(createQuery, function (error, result, fields){
     if (error) throw error;
     console.log(' Table has been created');
 });

 let alterQuery = "ALTER TABLE `pet` CHANGE COLUMN `status` `status` VARCHAR(255)";

 petsore.query(alterQuery, function (error, result,fields){
     if (error) throw error;
     console.log(' Table has been altered');
 });