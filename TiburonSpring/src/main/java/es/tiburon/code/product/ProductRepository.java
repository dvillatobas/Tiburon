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

	
	
	@Query("SELECT p FROM Product p WHERE p.name = :name AND p.price between :low and :high")
	public Collection<Product> findByNameBetweenPrice(@Param("name")String name,@Param("low")double low,@Param("high") double high);
	
	@Query("SELECT p FROM Product p WHERE p.name = :name AND p.price between :low and :high AND p.type = :type")
	public Collection<Product> findByNameBetweenPriceAndType(@Param("name")String name,@Param("low")double low,
			@Param("high") double high, @Param("type") String type);
	
	@Query("SELECT p FROM Product p WHERE p.name = :name AND p.price between :low and :high AND p.location = :location")
	public Collection<Product> findByNameBetweenPriceAndLocation(@Param("name")String name,@Param("low")double low,
			@Param("high") double high, @Param("type") String location);
	
	@Query("SELECT p FROM Product p WHERE p.name = :name AND p.price between :low and :high AND p.type = :type AND p.location = :location ")
	public Collection<Product> findByNameBetweenPriceAndTypeAndLocation(@Param("name")String name,@Param("low")double low,
			@Param("high") double high,@Param("type") String type, @Param("location") String location);
	
	

}
