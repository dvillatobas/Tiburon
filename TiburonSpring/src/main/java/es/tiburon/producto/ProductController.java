package es.tiburon.producto;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/productos")
public class ProductController {
	
	@Autowired
	private ProductRepository pRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Iterable<Product> getProducts(){
		return pRepository.findAll();
	}

}
