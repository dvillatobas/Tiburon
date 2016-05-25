package es.tiburon.code;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.tiburon.code.follow.Follow;
import es.tiburon.code.follow.FollowRepository;
import es.tiburon.code.message.Message;
import es.tiburon.code.message.MessageRepository;
import es.tiburon.code.product.Product;
import es.tiburon.code.product.ProductRepository;
import es.tiburon.code.user.User;
import es.tiburon.code.user.UserRepository;
import es.tiburon.code.valoration.Valoration;
import es.tiburon.code.valoration.ValorationRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {



	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private FollowRepository fRepo;
	
	@Autowired
	private MessageRepository mRepo;
	
	@Autowired
	private ValorationRepository vRepo;
	
	@Autowired
	private ProductRepository pRepo;

	@Override
	public void run(String... args) throws Exception {

		// Sample users

	//	userRepository.save(new User("user", "", "", "", "", "pass", "", "", "ROLE_USER"));
	//	userRepository.save(new User("admin", "", "", "", "", "pass", "", "", "ROLE_ADMIN"));
		User david = new User("david","david","villatobas","666777888","david@gmail.com","1234","/imagenes/users/foto2.jpg","profesional","ROLE_USER");
		User luis = new User("luis","luis","fernandez","666777888","luis@gmail.com","1234","/imagenes/users/foto1.jpg","particular","ROLE_USER");
		User juan = new User("juan","juan","rodrigued","666777888","juan@gmail.com","1234","/imagenes/users/foto2.jpg","profesional","ROLE_USER");
		User raul = new User("raul","raul","santos","666777888","raul@gmail.com","1234","/imagenes/users/foto1.jpg","particular","ROLE_USER");
		
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
		
		Message m1 = new Message(222555111,david,luis,"eeee que pasaaaa", "unread");
		mRepo.save(m1);
		
		Message m2 = new Message(222555114,david,raul,"eeee hola", "unread");
		mRepo.save(m2);
		
		Message m3 = new Message(222555114,raul,david,"buenas!!", "unread");
		mRepo.save(m3);
		
		Product p1 = new Product(222666544, "Camaro", 20000, 2010, "Madrid", "imagenes/1.jpg", 46968, david, "car", "Magnifico coche");
		pRepo.save(p1);
		
		
		Valoration v1 = new Valoration(david, "Me encanta", "El trato muy bueno, puntual...", p1);
		vRepo.save(v1);
		Valoration v2 = new Valoration(raul, "Me encanta", "El trato muy bueno, puntual...", p1);
		vRepo.save(v2);
		
		
		
		pRepo.save(new Product( 155234234,"Ford", 0,2016,"Valencia","imagenes/2.jpg",2500,david,"car","Coche para piezas o arreglo. Escucho ofertas coherentes"));
		pRepo.save(new Product( 234552345,"Chevrolet", 210,1965,"Madrid","/imagenes/3.jpg",25001,luis,"car","Espectacular camaro semi nuevo, con muy poco uso. Precio inmejorable, urge venta"));
		
		pRepo.save(new Product( 155234234,"Llantas aleacion 17\"", 210,1965,"Ávila","imagenes/p1.jpg",250,david,"piece","Llantas en perfecto estado"));
		pRepo.save(new Product( 234552345,"Faros delanteros", 210,1965,"Cuenca","/imagenes/p2.jpg",100,luis,"piece","P"));
		
		pRepo.save(new Product( 155234234,"Carburador", 210,1965,"Toledo","imagenes/p3.jpg",1200,juan,"piece","Casi nuevo, sin uso"));
		pRepo.save(new Product( 234552345,"Llantas 16\"", 210,1965,"Murcia","/imagenes/p1.jpg",400,luis,"piece","Pocos arañazos"));
	}

}
