package com.example.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.app.entity.Shift;
import com.example.app.repository.ShiftRepository;

@RestController
public class ShiftController {
  
  private final ShiftRepository shiftRepository;

  @Autowired
  public ShiftController(ShiftRepository repository) {
    this.shiftRepository = repository;
  }


  @GetMapping("/shift")
  public Iterable<Shift> shift() {
    // CrudRepository の メソッドが使える
    return shiftRepository.findAll();
  }

}
