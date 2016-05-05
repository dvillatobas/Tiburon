package es.tiburon.code;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.tiburon.code.user.User;
import es.tiburon.code.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {



	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {

		// Sample users

	//	userRepository.save(new User("user", "", "", "", "", "pass", "", "", "ROLE_USER"));
	//	userRepository.save(new User("admin", "", "", "", "", "pass", "", "", "ROLE_ADMIN"));
		
		userRepository.save(new User("david","david","villatobas","666777888","david@gmail.com","1234","/imagenes/users/foto2.jpg","profesional","ROLE_USER"));
		userRepository.save(new User("luis","luis","fernandez","666777888","luis@gmail.com","1234","/imagenes/users/foto1.jpg","particular","ROLE_USER"));
		userRepository.save(new User("juan","juan","rodrigued","666777888","juan@gmail.com","1234","/imagenes/users/foto2.jpg","profesional","ROLE_USER"));
		userRepository.save(new User("raul","raul","santos","666777888","raul@gmail.com","1234","/imagenes/users/foto1.jpg","particular","ROLE_USER"));
	}

}
