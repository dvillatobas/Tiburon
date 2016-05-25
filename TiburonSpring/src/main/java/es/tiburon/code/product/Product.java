package es.tiburon.code.product;

<<<<<<< HEAD
=======

>>>>>>> f4_entidad_productos
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
<<<<<<< HEAD
=======
import javax.persistence.OneToOne;

import es.tiburon.code.user.User;
>>>>>>> f4_entidad_productos

@Entity
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
<<<<<<< HEAD
	private long id;
	
	private String publicDate;
=======
	private Long id;
	
	private float publicDate;
>>>>>>> f4_entidad_productos
	private String name;
	private int used;
	private int year;
	private String location;
	private String img;
	private float price;
<<<<<<< HEAD
	private int idUser;
	private String type;
	private String description;
	
	public Product(){}
	
	public Product(String date,String name,int used, int year,String location,String img, float price,
			int idUser, String type, String description){
		super();
		this.publicDate = date;
=======
	
	@OneToOne
	private User user;
	private String type;
	private String description;
	
	
	
	
	public Product(){}

	public Product(float publicDate, String name, int used, int year, String location, String img, float price,
			User user, String type, String description) {
		super();
		this.publicDate = publicDate;
>>>>>>> f4_entidad_productos
		this.name = name;
		this.used = used;
		this.year = year;
		this.location = location;
		this.img = img;
		this.price = price;
<<<<<<< HEAD
		this.idUser = idUser;
		this.type = type;
		this.description = description;
		
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPublicDate() {
		return publicDate;
	}

	public void setPublicDate(String publicDate) {
=======
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
>>>>>>> f4_entidad_productos
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

<<<<<<< HEAD
=======
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

>>>>>>> f4_entidad_productos
	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

<<<<<<< HEAD
	public int getIdUser() {
		return idUser;
	}

	public void setIdUser(int idUser) {
		this.idUser = idUser;
=======
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
>>>>>>> f4_entidad_productos
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
<<<<<<< HEAD

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}


	
	
=======
	
	public int compareTo(Product p){
		if(this.publicDate > p.getPublicDate()){
			return -1;
		}else{
			return 1;
		}
	}
>>>>>>> f4_entidad_productos
	
}
