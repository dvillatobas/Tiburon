package es.tiburon.code.product;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/products")
public class ProductController {

	@Autowired
	private ProductRepository pRepository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET )
	public Collection<Product> getProducts(){
		return pRepository.findAll();
	}
}
