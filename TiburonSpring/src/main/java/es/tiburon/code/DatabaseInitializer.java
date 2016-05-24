package es.tiburon.code;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.tiburon.code.product.Image;
import es.tiburon.code.product.Product;
import es.tiburon.code.product.ProductRepository;
import es.tiburon.code.user.User;
import es.tiburon.code.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private ProductRepository productRepository;

	@Override
	public void run(String... args) throws Exception {
				
		// Sample users
		userRepository.save(new User("user", "", "", "", "", "pass", "", "", "ROLE_USER"));
		userRepository.save(new User("admin", "", "", "", "", "pass", "", "", "ROLE_ADMIN"));
		
		//Products
		productRepository.save(new Product( "1/1/16","camaro", 210,1965,"Madrid","/imagenes/1.jpg",2500,1,"car","Espectacular camaro semi nuevo, con muy poco uso. Precio inmejorable, urge venta"));
		productRepository.save(new Product( "155","camaro", 210,1965,"Valencia","imagenes/2.jpg",2500,1,"car","askldfms"));
		
		
	}

}
