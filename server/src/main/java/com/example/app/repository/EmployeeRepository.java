package com.example.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.app.entity.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {}