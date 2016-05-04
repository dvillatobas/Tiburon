package es.tiburon.code.user;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;




@RestController
@RequestMapping("/users")
public class UserController {
	private static final Logger log = LoggerFactory.getLogger(UserController.class);
	
	@Autowired
	private UserRepository uRepo;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<User> getUsersList() {
		return uRepo.findAll();
	}
	@RequestMapping(value = "/nick/{nick}", method = RequestMethod.GET)
	public Collection<User> getUsersListByNick(@PathVariable String nick) {
		return uRepo.findByNickContaining(nick);
	}
	
	@RequestMapping(value = "/nick/{nick}/{tipo}", method = RequestMethod.GET)
	public Collection<User> getUsersListByNickAndTipo(@PathVariable String nick, @PathVariable String tipo) {
		if(tipo == "ambos"){
			return uRepo.findByNickContaining(nick);
		}else{
			return uRepo.findByNickContainingAndTipo(nick, tipo);
		}
		
	}
	
	@RequestMapping(value = "/tipo/{tipo}", method = RequestMethod.GET)
	public Collection<User> getUsersListByTipo(@PathVariable String tipo) {
		if(tipo.contentEquals("all")){
			return uRepo.findAll();
		}else{
			return uRepo.findByTipo(tipo);
		}
		
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public User addUser(@RequestBody User u) {

		uRepo.save(u);

		return u;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<User> getUser(@PathVariable long id){
		log.info("Get user {}", id);
		User u = uRepo.findOne(id);
		if(u!=null){
			return new ResponseEntity<>(u,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	
}
