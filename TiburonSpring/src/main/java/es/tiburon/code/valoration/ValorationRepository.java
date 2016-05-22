package es.tiburon.code.valoration;


import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;




public interface ValorationRepository extends JpaRepository<Valoration, Long> {

	
	//Collection<Valoration> findByProduct(Long Product_id);
	//Collection<Valoration> findByNickUser(Long User_id);
		
	
}
