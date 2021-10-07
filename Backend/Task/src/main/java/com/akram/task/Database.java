package com.akram.task;

import java.time.Instant;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.akram.task.employee.Employee;
import com.akram.task.employee.EmployeeRepository;

@Configuration
public class Database {

	private static final Logger log = LoggerFactory.getLogger(Database.class);

	@Bean
	CommandLineRunner init(EmployeeRepository repository) {

		return args -> {
			log.info("Preloading " + repository
					.save(new Employee("Akram", "Ahmed", "mail", "phone","date", 100, 1, 1)));
		};
	}
}
