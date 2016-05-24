package es.tiburon.code.product;


import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ProductRepository extends JpaRepository<Product, Long> {


	Collection<Product> findByIdUser(int idUser);
	Collection<Product> findByNameIgnoreCase(String name);
	@Query("SELECT p FROM Product p WHERE p.name = :name AND p.price between :low and :high")
	public Collection<Product> findByNameBetweenPrice(@Param("name")String name,@Param("low")double low,@Param("high") double high);
	Collection<Product> findByPriceBetween(double low, double high);


}
