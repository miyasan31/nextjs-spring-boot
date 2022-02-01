package com.example.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.app.entity.Attendance;
import com.example.app.repository.AttendanceRepository;

@RestController
public class AttendanceController {
  
  private final AttendanceRepository attendanceRepository;

  @Autowired
  public AttendanceController(AttendanceRepository repository) {
    this.attendanceRepository = repository;
  }


  @GetMapping("/attendance")
  public Iterable<Attendance> attendance() {
    // CrudRepository の メソッドが使える
    return attendanceRepository.findAll();
  }

}
