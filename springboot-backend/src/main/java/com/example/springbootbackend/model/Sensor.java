package com.example.springbootbackend.model;

//import javax.persistence.*;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;

@Entity
@Table(name = "sensors")
public class Sensor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "sensor_id")
    private String sensorID;

    @Column(name = "date")
    private Date date;

	@Column(name = "data_value")
	private double dataValue;

    @Column(name = "status")
    private String status;




    public Sensor(){}

    public Sensor(String sensorID, Date date, double dataValue, String status) {
        this.sensorID = sensorID;
        this.date = date;
        this.dataValue = dataValue;
        this.status = status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSensorID() {
        return sensorID;
    }

    public void setSensorID(String sensorID) {
        this.sensorID = sensorID;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public double getDataValue() {
        return dataValue;
    }

    public void setDataValue(double dataValue) {
        this.dataValue = dataValue;
    }
    //status
    public String getStatus() {

        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
