const connection = require('../config/db');
const dotenv = require('dotenv').config();

async function storeTask(request, response) {
    const params = Array(
        request.body.CPF,
        request.body.name,
        request.body.email,
        request.body.password
    )

    const query = "INSERT INTO users(CPF, name, email, password) VALUES(?,?,?,?)";

    connection.query(query, params, (err, results) => {
        if(results) {
            response
            .status(201)
            .json({
                sucess: true,
                message: "Sucesso!!",
                data: results
            });

        } else {
            response
            .status(400)
            .json({
                sucess: false,
                message: "Ops, deu problemas!",
                data: err
            })
        }
    })
}

module.exports = {
    storeTask
}