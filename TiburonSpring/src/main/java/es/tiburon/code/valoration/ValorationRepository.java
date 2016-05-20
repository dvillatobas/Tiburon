package es.tiburon.code.valoration;


import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import es.tiburon.code.valoration.Valoration;




public class ValorationRepository extends JpaRepository<Valoration, Long> {

	Valoration findById(int id);
	Collection<Valoration> findByProduct(int Product_id);
	Collection<Valoration> findByNickUser(int User_id);
		
	
}
