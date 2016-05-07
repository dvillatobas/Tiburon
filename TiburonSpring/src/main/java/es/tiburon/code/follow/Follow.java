package es.tiburon.code.follow;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

import es.tiburon.code.user.User;

@Entity
public class Follow {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@OneToOne
	private User user;
	
	// ManyToMany porque si no no permite duplicidades
	
	@ManyToMany
	private List<User> follows;
	
	@ManyToMany
	private List<User> followers;
	
	public Follow(){}

	public Follow(User user) {
		super();
		this.user = user;
		this.follows = new ArrayList<User>();
		this.followers = new ArrayList<User>();
	}

	public User getUser() {
		return user;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<User> getFollows() {
		return follows;
	}

	public void setFollows(List<User> follows) {
		this.follows = follows;
	}

	public List<User> getFollowers() {
		return followers;
	}

	public void setFollowers(List<User> followers) {
		this.followers = followers;
	}

	public Long getId() {
		return id;
	}
	
	
	
	
}
