package es.tiburon.code;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.tiburon.code.follow.Follow;
import es.tiburon.code.follow.FollowRepository;
import es.tiburon.code.user.User;
import es.tiburon.code.user.UserRepository;
import es.tiburon.code.valoration.Valoration;
import es.tiburon.code.valoration.ValorationRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {



	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ValorationRepository valorationRepository;
	
	
	@Autowired
	private FollowRepository fRepo;

	@Override
	public void run(String... args) throws Exception {

		// Sample users

	//	userRepository.save(new User("user", "", "", "", "", "pass", "", "", "ROLE_USER"));
	//	userRepository.save(new User("admin", "", "", "", "", "pass", "", "", "ROLE_ADMIN"));
		User david = new User("david","david","villatobas","666777888","david@gmail.com","1234","/imagenes/users/foto2.jpg","profesional","ROLE_USER");
		User luis = new User("luis","luis","fernandez","666777888","luis@gmail.com","1234","/imagenes/users/foto1.jpg","particular","ROLE_USER");
		User juan = new User("juan","juan","rodrigued","666777888","juan@gmail.com","1234","/imagenes/users/foto2.jpg","profesional","ROLE_USER");
		User raul = new User("raul","raul","santos","666777888","raul@gmail.com","1234","/imagenes/users/foto1.jpg","particular","ROLE_USER");
		
		
		Valoration val = new Valoration(Long.valueOf(1), Long.valueOf(1),"Muy bonito (hecho en spring)"); //creamos
		valorationRepository.save(val);  //almacenamos
		Valoration val2 = new Valoration(Long.valueOf(2), Long.valueOf(2),"puntual (hecho en spring)"); //creamos
		valorationRepository.save(val);  //almacenamos
		
		userRepository.save(david);
		userRepository.save(luis);
		userRepository.save(juan);
		userRepository.save(raul);
		
		
		Follow f = new Follow(david);
		f.getFollowers().add(luis);
		f.getFollowers().add(juan);
		f.getFollows().add(raul);
		f.getFollows().add(luis);
		fRepo.save(f);
		
		Follow f1 = new Follow(luis);
		f1.getFollows().add(david);
		f1.getFollowers().add(david);
		fRepo.save(f1);
		
		Follow f2 = new Follow(juan);
		f2.getFollows().add(david);
		fRepo.save(f2);
		
		Follow f3 = new Follow(raul);
		f3.getFollowers().add(david);
		fRepo.save(f3);
	}

}
