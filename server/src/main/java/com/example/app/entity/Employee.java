package com.example.app.entity;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table("employee") 
public class Employee {

  @Id
  private int employee_id;
  private String first_name;
  private String last_name;
  private Date birthday;
  private int gender;
  private String phone;
  private String email;
  private String address;
  private int employee_type;
  private Date join_date;
  private Date leaving_date;

}
