package com.example.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.app.entity.Employee;
import com.example.app.repository.EmployeeRepository;

@RestController
public class EmployeeController {
  
  private final EmployeeRepository employeeRepository;

  @Autowired
  public EmployeeController(EmployeeRepository repository) {
    this.employeeRepository = repository;
  }


  @GetMapping("/employee")
  public Iterable<Employee> employee() {
    // CrudRepository の メソッドが使える
    return employeeRepository.findAll();
  }

}
