package es.tiburon.code;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.tiburon.code.user.User;
import es.tiburon.code.user.UserRepository;

import es.tiburon.code.mensaje.Mensaje;
import es.tiburon.code.mensaje.MensajeRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {



	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private MensajeRepository mensajeRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample users

		userRepository.save(new User("user", "", "", "", "", "pass", "", "", "ROLE_USER"));
		userRepository.save(new User("admin", "", "", "", "", "pass", "", "", "ROLE_ADMIN"));
		
		mensajeRepository.save(new Mensaje(Long.MIN_VALUE,Long.MIN_VALUE,Long.MIN_VALUE,"que te pasa","read"));
	}

}
