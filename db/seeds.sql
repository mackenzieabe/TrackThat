INSERT INTO department
(department_name)
VALUES
('Engineering', 'Finance', 'Legal', 'Sales'); 

INSERT INTO roles
(title, department_id, salary)
VALUES
('Sales Lead', 'Sales', '100000'),
('Salesperson', 'Sales', '8000'),
('Lead Engineer', 'Engineering', '150000'),
('Software Engineer', 'Engineering', '120000'),
('Account Manager', 'Finance', '160000'),
('Accountant', 'Finance', '125000'),
('Legal Team Lead', 'Legal', '250000'),
('Lawyer', 'Legal', '190000'); 

INSERT INTO employee
(first_name, last_name, title, role_id, salary, manager_id)
VALUES
('John', 'Doe', 'Sales Lead', '4', '100000', 'null'),
('Mike', 'Chan', 'Salesperson', '4', '80000', '1'),
('Ashley', 'Rodriguez', 'Lead Engineer', '1', '150000','null'),
('Kevin', 'Tupik', 'Software Engineer', '1', '120000', '3'),
('Kunal', 'Singh', 'Account Manager','2', '160000', 'null'),
('Malia', 'Brown', 'Accountant', '2', '125000', '5'),
('Sarah', 'Lourd', 'Legal Team Lead', '3', '250000', 'null'),
('Tom', 'Allen', 'Lawyer', '3', '190000', '7');

