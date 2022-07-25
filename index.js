const inquirer = require('inquirer');
const db = require('./db/connection')

db.connect(function (err) {
    if (err) throw err
    console.log('DB connected')
    mainQuestion()
})

function mainQuestion() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'directory',
            message: 'What would you like to do? (Use arrow keys)',
            choices: ['View All Employees', 'Add Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
        }
    ]).then(answer => {
        switch (answer.directory) {
            case 'View All Employees':
                viewAllEmployees()
                break;
            case 'Add Employees':
                addEmployee()
                break;
            case 'Update Employee Role':
                updateEmployee()
                break;
            default:
                db.end()
        }
    })
}

function viewAllEmployees() {
    db.query('SELECT * FROM employee;', (err, res) => {
        if (err) throw err
        console.table(res)
        mainQuestion()
    })
}
