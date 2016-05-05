package es.tiburon.code.user;



import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository to manage users in database.
 * 
 * NOTE: This interface is intended to be extended by developer adding new
 * methods. Current method can not be removed because it is used in
 * authentication procedures.
 */
public interface UserRepository extends JpaRepository<User, Long> {

	User findByNick(String nick);
	Collection<User> findByNickContaining(String nick);
	Collection<User> findByTipo(String tipo);
	Collection<User> findByNickContainingAndTipo(String nick,String tipo);
	
	

}
