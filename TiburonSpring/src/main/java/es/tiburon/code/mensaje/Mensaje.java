package es.tiburon.code.mensaje;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Mensaje {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	public Long date;
	public Long idEmisor;
	public Long idReceptor;
	public String mensaje;
	public String estado;
	
	public Mensaje(Long id, Long date, Long idEmisor, Long idReceptor, String mensaje, String estado) {
		super();
		this.id = id;
		this.date = date;
		this.idEmisor = idEmisor;
		this.idReceptor = idReceptor;
		this.mensaje = mensaje;
		this.estado = estado;
	}
	
	public Long getId() {
		return id;
	}
	public Long getDate() {
		return date;
	}
	public Long getIdEmisor() {
		return idEmisor;
	}
	public Long getIdReceptor() {
		return idReceptor;
	}
	public String getMensaje() {
		return mensaje;
	}
	public String getEstado() {
		return estado;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setDate(Long date) {
		this.date = date;
	}
	public void setIdEmisor(Long idEmisor) {
		this.idEmisor = idEmisor;
	}
	public void setIdReceptor(Long idReceptor) {
		this.idReceptor = idReceptor;
	}
	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	
}
