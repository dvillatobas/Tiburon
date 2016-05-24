package es.tiburon.code.product;


import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductRepository extends JpaRepository<Product, Long> {


	Collection<Product> findByIdUser(int idUser);
	Collection<Product> findByNameIgnoreCase(String name);
	Collection<Product> findByType(String type);
	Collection<Product> findByLocation(String location);
	Collection<Product> findByPriceBetween(double low, double high);
	Collection <Product> findByNameAndType(String name,String type);
	Collection <Product> findByNameAndLocation(String name,String location);
	Collection <Product> findByTypeAndLocation(String type,String location);

	
	//Nombre y precio
	@Query("SELECT p FROM Product p WHERE p.name = :name AND p.price between :low and :high")
	public Collection<Product> findByNameBetweenPrice(@Param("name")String name,@Param("low")double low,@Param("high") double high);
	
	//Nombre precio y tipo
	@Query("SELECT p FROM Product p WHERE p.name = :name AND p.price between :low and :high AND p.type = :type")
	public Collection<Product> findByNameBetweenPriceAndType(@Param("name")String name,@Param("low")double low,
			@Param("high") double high, @Param("type") String type);
	
	//Nombre precio y ubicacion
	@Query("SELECT p FROM Product p WHERE p.name = :name AND p.price between :low and :high AND p.location = :location")
	public Collection<Product> findByNameBetweenPriceAndLocation(@Param("name")String name,@Param("low")double low,
			@Param("high") double high, @Param("location") String location);
	
	//Nombre precio tipo y ubicacion
	@Query("SELECT p FROM Product p WHERE p.name = :name AND p.price between :low and :high AND p.type = :type AND p.location = :location ")
	public Collection<Product> findByNameBetweenPriceAndTypeAndLocation(@Param("name")String name,@Param("low")double low,
			@Param("high") double high,@Param("type") String type, @Param("location") String location);
	
	//Precio y tipo
	@Query("SELECT p FROM Product p WHERE p.type = :type AND p.price between :low and :high")
	public Collection<Product> findByTypeBetweenPrice(@Param("type")String type,
			@Param("low")double low,@Param("high") double high);
	
	//Precio y ubicacion
		@Query("SELECT p FROM Product p WHERE p.location = :location AND p.price between :low and :high")
		public Collection<Product> findByLocationBetweenPrice(@Param("location")String location,
				@Param("low")double low,@Param("high") double high);

}
