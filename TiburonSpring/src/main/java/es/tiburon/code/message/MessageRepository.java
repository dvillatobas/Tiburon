package es.tiburon.code.message;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import es.tiburon.code.user.User;

public interface MessageRepository extends JpaRepository<Message,Long>{
	
	
	Collection<Message> findByEmisorOrReceptor(User user1, User user2);
	Collection<Message> findByEmisorAndReceptor(User user1, User user2);
}
