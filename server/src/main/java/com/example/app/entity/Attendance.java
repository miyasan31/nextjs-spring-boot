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
@Table("atendance") 
public class Attendance {

  @Id
  private int atendance_id;
  private int employee_id;
  private Date join_date_time;
  private Date leaving_date_time;
  
}
