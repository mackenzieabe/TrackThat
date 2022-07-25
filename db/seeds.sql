INSERT INTO department
(name)
VALUES
('Engineering'), ('Finance'), ('Legal'), ('Sales'); 

INSERT INTO role
(title, department_id, salary)
VALUES
('Sales Lead', 4, 100000),
('Salesperson', 4, 8000),
('Lead Engineer', 1, 150000),
('Software Engineer', 1, 120000),
('Account Manager', 2, 160000),
('Accountant', 2, 125000),
('Legal Team Lead', 3, 250000),
('Lawyer', 3, 190000); 

INSERT INTO employee
(first_name, last_name, title, role_id, manager_id)
VALUES
('John', 'Doe', 'Sales Lead', 4, NULL),
('Mike', 'Chan', 'Salesperson', 4, 1),
('Ashley', 'Rodriguez', 'Lead Engineer', 1, NULL),
('Kevin', 'Tupik', 'Software Engineer', 1, 1),
('Kunal', 'Singh', 'Account Manager',2, NULL),
('Malia', 'Brown', 'Accountant', 2, 1),
('Sarah', 'Lourd', 'Legal Team Lead', 3, NULL),
('Tom', 'Allen', 'Lawyer', 3, 1);