package com.example.springbootbackend.controller;


import com.example.springbootbackend.model.Sensor;
import com.example.springbootbackend.repository.SensorRepository;
import com.example.springbootbackend.service.MailService;
import com.example.springbootbackend.service.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class SensorController {
    @Autowired
	private JavaMailSender javaMailSender;
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
		try {
			new MailService(javaMailSender).sendMail();
		} catch (IOException e) {
			e.printStackTrace();
		}


		return sensorService.findAll();
	}
    // create sensor rest api
    @PostMapping("/sensors")
    public Sensor createSensor(@RequestBody Sensor sensor) {


    	return sensorService.createSensor(sensor);
    }
}
