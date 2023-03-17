package com.example.TopIt;

import com.example.TopIt.models.User;
import com.example.TopIt.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication

public class TopItApplication {

	public static void main(String[] args) {
		SpringApplication.run(TopItApplication.class, args);
	}

	@Bean
	CommandLineRunner createAdmin(UserRepository repo) {
		return (e) -> {
			try {
				User admin = new User(1L, "Rumen", "Rusev", "rumen@gmail.com", "rumen", true);
				repo.save(admin);
			} catch (Exception exp) {

			}
		};
	}
}
