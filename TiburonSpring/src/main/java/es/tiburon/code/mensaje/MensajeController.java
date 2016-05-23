package es.tiburon.code.mensaje;

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
@RequestMapping("/mensajes")
public class MensajeController {
	private static final Logger log = LoggerFactory.getLogger(MensajeController.class);
	
	@Autowired
	private MensajeRepository mRepo;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Mensaje> getMensajeList(){
		return mRepo.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Mensaje> getMensaje(@PathVariable long id){
		log.info("Get mensaje {}", id);
		Mensaje m = mRepo.findOne(id);
		if(m!=null){
			return new ResponseEntity<>(m,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Mensaje nuevoAnuncio(@RequestBody Mensaje mensaje) {
		mRepo.save(mensaje);
		return mensaje;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Mensaje> getMensajeByEmisor(@PathVariable long id){
		log.info("Get contact list {}", id);
		Mensaje m = mRepo.findByIdEmisor(id);
		if(m!=null){
			return new ResponseEntity<>(m,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Mensaje> getMensajeByReceptor(@PathVariable long id){
		log.info("Get contact list {}", id);
		Mensaje m = mRepo.findByIdEmisor(id);
		if(m!=null){
			return new ResponseEntity<>(m,HttpStatus.OK);
		}else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	
}
