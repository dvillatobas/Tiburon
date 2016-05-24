package es.tiburon.code.product;


import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {


	Collection<Product> findByIdUser(int idUser);


}
