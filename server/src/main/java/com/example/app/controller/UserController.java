package com.example.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.app.entity.User;
import com.example.app.repository.UserRepository;

@RestController
public class UserController {

  private final UserRepository repository;

  @Autowired
  public UserController(UserRepository repository) {
    this.repository = repository;
  }

  @GetMapping("/uer")
  public Iterable<User> user() {
    // CrudRepository の メソッドが使える
    return repository.findAll();
  }

  @PostMapping("/")
  public User create(@RequestBody User user) {
    // CrudRepository の メソッドが使える
    var savedUser = repository.save(user);
    return savedUser;
  }

  @RequestMapping("/count")
  public String count() {
    // CrudRepository の メソッドが使える
    return String.valueOf(repository.count());
  }

  @RequestMapping("/countoverfive")
  public String countOverFive() {
    // 新しく定義したクエリも呼び出せる
    return String.valueOf(repository.countOverFive());
  }
}