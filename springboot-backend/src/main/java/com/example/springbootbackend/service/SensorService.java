package com.example.springbootbackend.service;

import com.example.springbootbackend.model.Sensor;
import com.example.springbootbackend.repository.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class SensorService {

	@Autowired
	private SensorRepository sensorRepository;

	public List<Sensor> getSensorData(String sensorId){
		return sensorRepository.findBySensorID(sensorId);
	}

	public List<Sensor> findAll(){
		return sensorRepository.findAll();
	}

    //Sensor Alert
	public Sensor

	createSensor(Sensor sensor) {

		if (sensor.getDataValue() > 35) {
			sensor.setStatus("Warning");
		} else {
			sensor.setStatus("Online");
		}
		return sensorRepository.save(sensor);
	}
}
