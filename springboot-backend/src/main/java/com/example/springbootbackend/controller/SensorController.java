package com.example.springbootbackend.controller;


import com.example.springbootbackend.model.Sensor;
import com.example.springbootbackend.repository.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class SensorController {

    @Autowired
    private SensorRepository sensorRepository;

    // get all sensors
    @GetMapping("/sensors")
    public List<Sensor> getAllEmployees(){
        return sensorRepository.findAll();
    }
    // create sensor rest api
    @PostMapping("/sensors")
    public Sensor createEmployee(@RequestBody Sensor sensor) {
        return sensorRepository.save(sensor);
    }
}
