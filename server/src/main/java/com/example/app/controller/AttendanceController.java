package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import com.example.app.entity.Attendance;
import com.example.app.repository.AttendanceRepository;

@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {
  private final AttendanceRepository attendanceRepository;

  @Autowired
  public AttendanceController(AttendanceRepository repository) {
    this.attendanceRepository = repository;
  }

  @GetMapping()
  @ResponseStatus(HttpStatus.OK)
  public Iterable<Attendance> getAttendanceList() {
    return attendanceRepository.findAll();
  }

  @GetMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public Attendance getAttendance(@PathVariable Long id) {
    return attendanceRepository.findById(id).get();
  }

  @PostMapping()
  @ResponseStatus(HttpStatus.CREATED)
  public void postAttendance(
    @RequestBody Attendance attendance
  ) {
    attendanceRepository.save(attendance);
  }

  @PatchMapping()
  @ResponseStatus(HttpStatus.CREATED)
  public void putAttendance(
    @RequestBody Attendance attendance
  ) {
    attendanceRepository.save(attendance);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteAttendance(
    @PathVariable Long id
  ) {
    attendanceRepository.deleteById(id);
  }
}
