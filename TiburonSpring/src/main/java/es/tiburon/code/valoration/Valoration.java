package es.tiburon.code.valoration;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Valoration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	private int User_id;
	private int Product_id;
	private String text;



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getUser_id() {
		return User_id;
	}

	public void setUser_id(int user_id) {
		User_id = user_id;
	}

	public int getProduct_id() {
		return Product_id;
	}

	public void setProduct_id(int product_id) {
		Product_id = product_id;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;
	
	
	

	public Valoration() {}
	
	public Valoration(int User_id,int Product_id,String text) {
		this.User_id = User_id;
		this.Product_id = Product_id;
		this.text = text;
		
	}

}
