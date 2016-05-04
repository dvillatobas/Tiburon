package es.tiburon.producto;

import org.springframework.data.jpa.repository.JpaRepository;

import es.tiburon.code.user.User;

public interface ProductRepository extends JpaRepository<Product, Long> {


}
