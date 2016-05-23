package es.tiburon.code.mensaje;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MensajeRepository extends JpaRepository<Mensaje, Long> {
	Mensaje findByIdEmisor(Long Id);
	
}
