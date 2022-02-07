package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import com.example.app.entity.Employee;
import com.example.app.repository.EmployeeRepository;

@RestController
@RequestMapping("/api/employee")
public class EmployeeController {
  private final EmployeeRepository employeeRepository;

  @Autowired
  public EmployeeController(EmployeeRepository repository) {
    this.employeeRepository = repository;
  }

  @GetMapping()
  @ResponseStatus(HttpStatus.OK)
  public Iterable<Employee> getEmployeeList() {
    return employeeRepository.findAll();
  }

  @GetMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public Employee getEmployee(@PathVariable Long id) {
    return employeeRepository.findById(id).get();
  }

  @PostMapping()
  @ResponseStatus(HttpStatus.CREATED)
  public void postEmployee(
    @RequestBody Employee employee
  ) {
    employeeRepository.save(employee);
  }

  @PatchMapping()
  @ResponseStatus(HttpStatus.CREATED)
  public void putEmployee(
    @RequestBody Employee employee
  ) {
    employeeRepository.save(employee);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteEmployee(
    @PathVariable Long id
  ) {
    employeeRepository.deleteById(id);
  }
}
