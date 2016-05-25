package es.tiburon.code.valoration;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import es.tiburon.code.product.Product;

public interface ValorationRepository extends JpaRepository<Valoration, Long> {
	
	Collection<Valoration> findByProduct(Product product);
}
