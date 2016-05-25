package es.tiburon.code.message;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import es.tiburon.code.user.User;

@Entity
public class Message {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private float date;
	
	@OneToOne
	private User emisor;
	
	@OneToOne
	private User receptor;
	
	private String message;
	
	private String state;
	
	public Message(){}

	public Message(float date, User emisor, User receptor, String message, String state) {
		super();
		this.date = date;
		this.emisor = emisor;
		this.receptor = receptor;
		this.message = message;
		this.state = state;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public float getDate() {
		return date;
	}

	public void setDate(float date) {
		this.date = date;
	}

	public User getEmisor() {
		return emisor;
	}

	public void setEmisor(User emisor) {
		this.emisor = emisor;
	}

	public User getReceptor() {
		return receptor;
	}

	public void setReceptor(User receptor) {
		this.receptor = receptor;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}
	
	public int compareTo(Message m){
		if(this.getDate()>m.getDate()){
			return -1;
		}else{
			return 1;
		}
	}
	
	
}
