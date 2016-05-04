package es.tiburon.code.mensaje;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mensajes")
public class MensajeController {
	private static final Logger log = LoggerFactory.getLogger(MensajeController.class);
	
	@Autowired
	private MensajeRepository mRepo;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection <Mensaje> getMensajeList(){
		return mRepo.findAll();
	}
	
	
}
