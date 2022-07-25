const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

router.get('./employees', (req, res) => {
    const sql = `SELECT * FROM employee WHERE id= ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: row
        });
    });
});

router.post('./employee', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'title', 'role_id', 'salary', 'manager_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO employee (first_name, last_name, title, role_id, salary, manager_id) VALUES (?,?,?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.title, body.role_id, body.salary, body.manager_id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    })
});
