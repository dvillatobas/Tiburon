package es.tiburon.code.product;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

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

import es.tiburon.code.follow.FollowController;
import es.tiburon.code.user.User;
import es.tiburon.code.valoration.Valoration;
import es.tiburon.code.valoration.ValorationRepository;


@RestController
@RequestMapping("/products")
public class ProductController {
	private static final Logger log = LoggerFactory.getLogger(FollowController.class);

	@Autowired
	private ProductRepository pRepo;
	@Autowired
	private ValorationRepository vRepo;
	
	@RequestMapping(value = "/", method = RequestMethod.GET )
	public Collection<Product> getProducts(){
		return pRepo.findAll();
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Product> getProduct(@PathVariable Long id){
		Product founded = pRepo.findOne(id);
		if(founded != null){
			return new ResponseEntity<>(founded,HttpStatus.OK);
		}
		else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value="/productsUser", method = RequestMethod.PUT)
	public Collection<Product> getProductUser(@RequestBody User user){
		return pRepo.findByUser(user);
	}
	
	
	@RequestMapping(value ="/add", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Product newProduct(@RequestBody Product producto){
		Product p = new Product(producto);
		pRepo.save(p);
		log.info("guardado");
		return p;
	}
	
	@RequestMapping(value = "/update", method = RequestMethod.PUT)
	public ResponseEntity<Product> updateProduct(@RequestBody Product productoActualizado){
		
		
		if(productoActualizado != null){
			pRepo.save(productoActualizado);
			return new ResponseEntity<>(productoActualizado,HttpStatus.OK);
			
		}
		else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/delete", method = RequestMethod.PUT)
	public Product deleteProduct(@RequestBody Long id){
		List<Valoration> list = vRepo.findAll();
		Product del = pRepo.findOne(id);
		if(del != null){
			for(Valoration v : list){
				if(v.getProduct().getId() == del.getId()){
					vRepo.delete(v);
				}
			}
			pRepo.delete(del.getId());
			log.info("Borrado: {}",del.getId());
			return del;
		}
		else{
			return null;
		}
	}
	
	@RequestMapping(value = "/news", method = RequestMethod.GET)
	public Collection<Product> newProducts(){
		log.info("lista de nuevos productos");
		List<Product> list = new ArrayList<Product>(pRepo.findAll());
		Collections.sort(list, (a, b) -> b.compareTo(a));
		return list;
	}
	
	@RequestMapping(value="/getProductsByUsers", method = RequestMethod.PUT)
	public Collection<Product> getProductByUsers(@RequestBody List<User> users){
		List<Product> list = new ArrayList<Product>();
		System.out.println(users);
		for(User u : users){
			list.addAll(pRepo.findByUser(u));
		}
		log.info("lista de productos de la lista de usuarios");
		return list;
	}
	
	
	
}
