const mysql = require('mysql');
import { config } from '../index';


const pool = mysql.createPool(config.db);

let testdb = {};

testdb.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM blogs`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};


testdb.one = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM blogs WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

module.exports = testdb;

//all one insert update delete