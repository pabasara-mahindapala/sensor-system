package com.example.springbootbackend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.IOException;
import java.util.Properties;

@Service
public class MailService {

	private final JavaMailSender javaMailSender;

	public MailService(JavaMailSender javaMailSender) {
		this.javaMailSender = javaMailSender;
	}

	public void sendMail() throws IOException {

		SimpleMailMessage mailMessage = new SimpleMailMessage();
		mailMessage.setFrom("kashulkenuka@gmail.com");
		mailMessage.setTo("kasulkenuka@gmail.com");
		mailMessage.setSubject("Alert");
		mailMessage.setText("temperature high");
		javaMailSender.send(mailMessage);


	}



}
