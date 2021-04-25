package com.example.springbootbackend.repository;

import com.example.springbootbackend.model.Sensor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SensorRepository extends JpaRepository<Sensor,Long> {

	List<Sensor> findBySensorID(String sensorID);


	//Sensor em = new Sensor();


}
