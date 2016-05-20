package es.tiburon.code.valoration;

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
@RequestMapping("/valorations")
public class ValorationController {
	
	
	private static final Logger log = LoggerFactory.getLogger(ValorationController.class);

	@Autowired
	private ValorationRepository repository;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Valoration> getValorations() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Valoration> getValoration(@PathVariable long id) {

		log.info("Get valoration {}", id);

		Valoration valoration = repository.findOne(id);
		if (valoration != null) {
			return new ResponseEntity<>(valoration, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Valoration nuevoValoration(@RequestBody Valoration valoration) {

		repository.save(valoration);

		return valoration;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Valoration> actulizaValoration(@PathVariable long id, @RequestBody Valoration updatedValoration) {

		Valoration valoration = repository.findOne(id);
		if (valoration != null) {

			updatedValoration.setId(id);
			repository.save(updatedValoration);

			return new ResponseEntity<>(updatedBook, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Valoration> borraValoration(@PathVariable long id) {

		if (repository.exists(id)) {
			repository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	
	

}
