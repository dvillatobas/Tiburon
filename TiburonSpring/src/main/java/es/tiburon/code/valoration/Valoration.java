package es.tiburon.code.valoration;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import es.tiburon.code.product.Product;
import es.tiburon.code.user.User;

@Entity
public class Valoration {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne
	private User user;
	
	private String valoration;
	private String description;
	
	@OneToOne
	private Product product;

	public Valoration(){}
	
	public Valoration(User user, String valoration, String description, Product product) {
		super();
		this.user = user;
		this.valoration = valoration;
		this.description = description;
		this.product = product;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getValoration() {
		return valoration;
	}

	public void setValoration(String valoration) {
		this.valoration = valoration;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
	
	
	
}
