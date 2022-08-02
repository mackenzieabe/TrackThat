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
    db.query("SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;", (err, res) => {
        if (err) throw err
        console.table(res)
        mainQuestion()
    })
}

function addEmployee() {
    inquirer
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
                type: 'input',
                name: 'employeeRoleId',
                message: "What is the employee's role ID?",
            },
            {
                type: 'input',
                name: 'employeeManagerId',
                message: "Please set the employees manager ID.",
            },
        ])
        .then(answers => {
            db.query('INSERT INTO employee SET ?', {
                first_name: answers.employeeFirstName,
                last_name: answers.employeeLastName,
                role_id: answers.employeeRoleId,
                manager_id: answers.employeeManagerId
            })
            mainQuestion()
        })

}

function updateEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'updatedEmployee',
            message: "What is the employee ID who needs a new role?"
        },
        {
            type: 'input',
            name: 'newRoleId',
            message: "What is the new role ID for this employee?"
        },
        {
            type: 'input',
            name: 'updatedManagerId',
            message: 'What is the manager ID for this updated role?'
        }
    ]).then(answers => {
        db.query('UPDATE employee SET ? WHERE ?;',
            [
                {
                    role_id: answers.newRoleId,
                    manager_id: answers.updatedManagerId
                },
                {
                    id: answers.updatedEmployee
                },
            ]
        )
        mainQuestion()
    })
}

function viewAllRoles() {
    db.query('SELECT * FROM role;', (err, res) => {
        if (err) throw err
        console.table(res)
        mainQuestion()
    })
}

function addRole() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newRole',
                message: "What is the name of the role you want to add?"
            },
            {
                type: 'input',
                name: 'roleSalary',
                message: "What is the salary of the role?"
            },
            {
                type: 'input',
                name: 'roleDepartment',
                message: "What department does the role belong to?",
            },

        ])
        .then(answers => {
            db.query('INSERT INTO role SET ?', {
                title: answers.newRole,
                salary: answers.roleSalary,
                department_id: answers.roleDepartment
            })
            mainQuestion()
        })
}

function viewAllDepartments() {
    db.query('SELECT * FROM department;', (err, res) => {
        if (err) throw err
        console.table(res)
        mainQuestion()
    })
}

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'newDepartment',
                message: 'What is the name of the department?'
            }
        ])
        .then(answers => {
            db.query('INSERT INTO department SET ?', {
                name: answers.newDepartment
            })
            mainQuestion()
        })
}