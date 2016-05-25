package es.tiburon.code.valoration;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import es.tiburon.code.follow.FollowController;
import es.tiburon.code.product.Product;

@RestController
@RequestMapping(value = "/valoration")
public class ValorationController {
	private static final Logger log = LoggerFactory.getLogger(FollowController.class);
	
	@Autowired
	private ValorationRepository vRepo;
	
	@RequestMapping(value="/",method = RequestMethod.GET)
	public Collection<Valoration> getValorations (){
		return vRepo.findAll();
	}
	
	@RequestMapping(value="/product",method = RequestMethod.PUT)
	public Collection<Valoration> getValorationsProduct (@RequestBody Product product){
		log.info("valoraciones del producto {}",product);
		return vRepo.findByProduct(product);
	}
	
	@RequestMapping(value="/add",method = RequestMethod.POST)
	public Valoration addValoration (@RequestBody Valoration valoration){
		Valoration v = new Valoration(valoration.getUser(),valoration.getValoration(),valoration.getDescription(),valoration.getProduct());
		vRepo.save(v);
		log.info("valoracion guardada");
		return v;
	}
	
}
