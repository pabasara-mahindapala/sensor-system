package com.example.springbootbackend.service;

import com.example.springbootbackend.model.Sensor;
import com.example.springbootbackend.repository.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;
import java.util.List;

@Service
public class SensorService {
	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired
	private SensorRepository sensorRepository;

	public List<Sensor> getSensorData(String sensorId){
		return sensorRepository.findBySensorID(sensorId);
	}

	public List<Sensor> findAll(){
		return sensorRepository.findAll();
	}


	public void createSensor(Sensor sensor) {

	


		if (sensor.getDataValue() > 35) {
			try {
				new MailService(javaMailSender).sendMail();
			} catch (IOException e) {
				e.printStackTrace();
			}
			sensor.setStatus("Warning");
		} else {
			sensor.setStatus("Online");
		}
//		return sensorRepository.save(sensor);
	}
}
