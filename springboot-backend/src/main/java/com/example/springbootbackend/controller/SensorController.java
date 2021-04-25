package com.example.springbootbackend.controller;


import com.example.springbootbackend.model.Sensor;
import com.example.springbootbackend.repository.SensorRepository;
import com.example.springbootbackend.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class SensorController {

    @Autowired
	private SensorService sensorService;

    // get all sensor by id
    @GetMapping("/sensors/{id}")
    public List<Sensor> getAllSensors(@PathVariable("id") String sensorId){
       return sensorService.getSensorData( sensorId );
    }
	// get all sensors
	@GetMapping("/sensors")
	public List<Sensor> getAllSensors(){
		return sensorService.findAll();
	}
    // create sensor rest api
    @PostMapping("/sensors")
    public Sensor createSensor(@RequestBody Sensor sensor) {
        return sensorService.createSensor(sensor);
    }
}
