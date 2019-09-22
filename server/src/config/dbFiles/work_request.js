const mysql = require('mysql');
import { config } from '../index';


const pool = mysql.createPool(config.db);

let work_request = {};

work_request.all = () => {

    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM work_request`, (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results);
        })

    })

};


work_request.one = (id) => {


    return new Promise((resolve, reject) => {

        pool.query(`SELECT * FROM work_request WHERE id = ?`, [id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

work_request.insert = (id,name,phone,email,request,severity,_created,_completed,status) => {


    return new Promise((resolve, reject) => {

        pool.query(`INSERT INTO work_request SET ?`, [id,name,phone,email,request,severity,_created,_completed,status ] ,(err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve ({id: results.insertId});
        })

    })
}

work_request.update = ({ id, status, severity, _completed }) => {


    return new Promise((resolve, reject) => {

        pool.query(`UPDATE work_request SET status = ?,severity = ?,_completed = ? WHERE id = ? `, [status, severity, _completed, id], (err, results) =>{

            if(err) {
                return reject(err);
            }

            return resolve(results[0]);
        })

    })
}

module.exports = work_request;

//all one insert update delete