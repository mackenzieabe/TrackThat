const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path') 

inquirer.prompt ([
    {
        type: 'list',
        name: 'directory',
        message: 'What would you like to do? (Use arrow keys)',
        choices: ['View All Employees', 'Add Employees', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit', 'View All Employees']
    }
])