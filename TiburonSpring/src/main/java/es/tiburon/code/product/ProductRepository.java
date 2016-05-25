package es.tiburon.code.product;


import java.util.Collection;
<<<<<<< HEAD

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {


	Collection<Product> findByIdUser(int idUser);

=======
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import es.tiburon.code.user.User;

public interface ProductRepository extends JpaRepository<Product, Long> {


	Collection<Product> findByUser(User user);
	List<Product> findByNameContainingIgnoreCase(String name);
	List<Product> findByNameContainingIgnoreCaseAndType(String name, String type);
>>>>>>> f4_entidad_productos

}
