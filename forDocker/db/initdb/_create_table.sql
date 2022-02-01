CREATE TABLE employee (
  employee_id  SERIAL,
  first_name VARCHAR(10) NOT NULL,
  last_name VARCHAR(10) NOT NULL,
  birthday DATE NOT NULL,
  gender INT NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone CHAR(11) NOT NULL,
  address VARCHAR(100) NOT NULL,
  employee_type INT NOT NULL,
  join_date DATE NOT NULL,
  leaving_date DATE DEFAULT NULL,

  PRIMARY KEY (employee_id)
);

CREATE TABLE shift (
  shift_id SERIAL,
  employee_id INT,
  join_date_time TIMESTAMP NOT NULL,
  leaving_date_time TIMESTAMP NOT NULL,

  PRIMARY KEY (shift_id),
  FOREIGN KEY(employee_id)
  REFERENCES employee (employee_id)
);

CREATE TABLE attendance (
  attendance_id SERIAL,
  employee_id INT,
  join_date_time TIMESTAMP NOT NULL,
  leaving_date_time TIMESTAMP DEFAULT NULL,
  
  PRIMARY KEY (attendance_id),
  FOREIGN KEY(employee_id)
  REFERENCES employee (employee_id)
);