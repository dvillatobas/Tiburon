package es.tiburon.code.product;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import es.tiburon.code.user.User;

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private float publicDate;
	private String name;
	private int used;
	private int year;
	private String location;
	private String img;
	private float price;
	
	@ManyToOne
	private User user;
	private String type;
	private String description;
	
	public Product(){}

	public Product(float publicDate, String name, int used, int year, String location, String img, float price,
			User user, String type, String description) {
		super();
		this.publicDate = publicDate;
		this.name = name;
		this.used = used;
		this.year = year;
		this.location = location;
		this.img = img;
		this.price = price;
		this.user = user;
		this.type = type;
		this.description = description;
	}
	
	public Product(Product p){
		this.publicDate = p.publicDate;
		this.name = p.name;
		this.used = p.used;
		this.year = p.year;
		this.location = p.location;
		this.img = p.img;
		this.price = p.price;
		this.user = p.user;
		this.type = p.type;
		this.description = p.description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public float getPublicDate() {
		return publicDate;
	}

	public void setPublicDate(float publicDate) {
		this.publicDate = publicDate;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getUsed() {
		return used;
	}

	public void setUsed(int used) {
		this.used = used;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	public int compareTo(Product p){
		if(this.publicDate > p.getPublicDate()){
			return -1;
		}else{
			return 1;
		}
	}
	
}
