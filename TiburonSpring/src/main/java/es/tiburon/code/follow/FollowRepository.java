package es.tiburon.code.follow;
import org.springframework.data.jpa.repository.JpaRepository;

import es.tiburon.code.user.User;

public interface FollowRepository extends JpaRepository<Follow,Long>{
	Follow findByUser(User user);

}
