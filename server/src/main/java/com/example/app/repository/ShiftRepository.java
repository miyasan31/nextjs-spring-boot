package com.example.app.repository;

// import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.example.app.entity.Shift;

@Repository
public interface ShiftRepository extends CrudRepository<Shift, Long> {


  
}