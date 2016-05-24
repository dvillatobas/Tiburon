package es.tiburon.code.product;


import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import es.tiburon.code.user.User;

public interface ProductRepository extends JpaRepository<Product, Long> {


	Collection<Product> findByUser(User user);


}
