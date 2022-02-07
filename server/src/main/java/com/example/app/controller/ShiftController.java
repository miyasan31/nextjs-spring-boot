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
import com.example.app.entity.Shift;
import com.example.app.repository.ShiftRepository;

@RestController
@RequestMapping("/api/shift")
public class ShiftController {
  private final ShiftRepository shiftRepository;

  @Autowired
  public ShiftController(ShiftRepository repository) {
    this.shiftRepository = repository;
  }

  @GetMapping()
  public Iterable<Shift> getShiftList() {
    return shiftRepository.findAll();
  }

  @GetMapping("/{id}")
  @ResponseStatus(HttpStatus.OK)
  public Shift getShift(@PathVariable Long id) {
    return shiftRepository.findById(id).get();
  }

  @PostMapping()
  @ResponseStatus(HttpStatus.CREATED)
  public void postShift(
    @RequestBody Shift shift
  ) {
    shiftRepository.save(shift);
  }

  @PatchMapping()
  @ResponseStatus(HttpStatus.CREATED)
  public void putShift(
    @RequestBody Shift shift
  ) {
    shiftRepository.save(shift);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void deleteShift(
    @PathVariable Long id
  ) {
    shiftRepository.deleteById(id);
  }
}
