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
            case 'View All Roles':
                viewAllRoles()
                break;
            case 'Add Role':
                addRole()
                break;
            case 'View All Departments':
                viewAllDepartments()
                break;
            case 'Add Department':
                addDepartment()
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

function addEmployee() {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeFirstName',
                message: "What is the employee's first name?"
            },
            {
                type: 'input',
                name: 'employeeLastName',
                message: "What is the employee's last name?"
            },
            {
                type: 'list',
                name: 'employeeRole',
                message: "What is the employee's role?",
                choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer']
            },
            {
                type: 'list',
                name: 'employeeManager',
                message: "Who is the employee's manager?",
                choices: ['John Doe', 'Mike Chan', 'Ashley Rodriquez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown', 'Sarah Lourd', 'Tom Allen']
            },
        ])
        .then(answers => {
            db.query(INSERT INTO employee ('first_name', 'last_name', 'title', 'role_id', 'manager_id')),
         (err, res) => {
                    if (err) throw err
                    console.table(res)
                    mainQuestion()
                }
        })
    }




    // function updateEmployee() {
    //     db.query('SELECT * FROM employee;', (err, res) => {
    //         if (err) throw err
    //         console.table(res)
    //         mainQuestion()
    //     })
    // }

    // function viewAllRoles() {
    //     db.query('SELECT * FROM role;', (err, res) => {
    //         if (err) throw err
    //         console.table(res)
    //         mainQuestion()
    //     })
    // }

    // function addRole() {
    //     db.query('SELECT * FROM role;', (err, res) => {
    //         if (err) throw err
    //         console.table(res)
    //         mainQuestion()
    //     })
    // }

    // function viewAllDepartments() {
    //     db.query('SELECT * FROM department;', (err, res) => {
    //         if (err) throw err
    //         console.table(res)
    //         mainQuestion()
    //     })
    // }

    // function addDepartment() {
    //     db.query('SELECT * FROM department;', (err, res) => {
    //         if (err) throw err
    //         console.table(res)
    //         mainQuestion()
    //     }