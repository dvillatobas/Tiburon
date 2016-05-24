package es.tiburon.code.product;
import java.util.Collection;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
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
	
	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<Product> getProductById(@PathVariable long id){
		Product founded = pRepository.findOne(id);
		if(founded != null){
			return new ResponseEntity<>(founded,HttpStatus.OK);
		}
		else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value="/productsUser/{idUser}", method = RequestMethod.GET)
	public Collection<Product> getProductUser(@PathVariable int idUser){
		Collection<Product> products =pRepository.findByIdUser(idUser);
		return products;
	}
	
	
	@RequestMapping(value ="/", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Product newProduct(@RequestBody Product producto){
		
		pRepository.save(producto);
		return producto;
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Product> updateProduct(@PathVariable long id, @RequestBody Product productoActualizado){
		
		Product founded = pRepository.findOne(id);
		if(founded != null){
			productoActualizado.setId(founded.getId());
			pRepository.save(productoActualizado);
			return new ResponseEntity<>(productoActualizado,HttpStatus.OK);
			
		}
		else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Product> deleteProduct(@PathVariable long id){
		
		if(pRepository.exists(id)){
			pRepository.delete(id);
			return new ResponseEntity<>(null, HttpStatus.OK);
		}
		else{
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@RequestMapping(value = "/search/{name}/{userProd}/{lowPrice}/{highPrice}/{type}/{location}", method = RequestMethod.GET)
	public Collection<Product> getSearch(@PathVariable String name,
			@PathVariable String userProd,
			@PathVariable String lowPrice,
			@PathVariable String highPrice,
			@PathVariable String type,
			@PathVariable String location){
		System.out.println(name);
		System.out.println(userProd);
		System.out.println(lowPrice);
		System.out.println(highPrice);
		System.out.println(type);
		System.out.println(location);
		
		boolean hayNombre = (name != null && !name.isEmpty());
		boolean hayPrecio = (lowPrice != null && !lowPrice.isEmpty() && highPrice != null && !highPrice.isEmpty());
		boolean hayTipo = type!="ambos";
		boolean hayUbicacion = (location != null && !location.isEmpty());
		
		Collection<Product> products = null;
		
		if(hayNombre){
			if(hayPrecio){
				if(hayTipo){
					if(hayUbicacion){
						products = pRepository.findByNameBetweenPriceAndTypeAndLocation(name,Double.parseDouble(lowPrice),
								Double.parseDouble(highPrice),type,location);
					}else{
						products = pRepository.findByNameBetweenPriceAndType(name,Double.parseDouble(lowPrice),
								Double.parseDouble(highPrice),type);
					}
				}
				else if(hayUbicacion){
					products = pRepository.findByNameBetweenPriceAndLocation(name,Double.parseDouble(lowPrice),
							Double.parseDouble(highPrice),location);
				}
				else{
					products = pRepository.findByNameBetweenPrice(name,Double.parseDouble(lowPrice),
							Double.parseDouble(highPrice));
				}
			}else if(hayTipo){
				products = pRepository.findByNameAndType(name, type);
			}else if(hayUbicacion){
				products = pRepository.findByNameAndType(name, location);
			}else{
				products = pRepository.findByNameIgnoreCase(name);
			}
			
		}
		else if(hayPrecio){
			if(hayTipo){
				
			}else if(hayUbicacion){
				
			}else{
				products = pRepository.findByPriceBetween(Double.parseDouble(lowPrice), Double.parseDouble(highPrice));
			}
			
		}
		else if(hayTipo){
			products = pRepository.findByType(type);
		}
		else if(hayUbicacion){
			products = pRepository.findByLocation(location);
		}
		
		
		
		
		return products;
	
		
		
		
		

	}
	
}
