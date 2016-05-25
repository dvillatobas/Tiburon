package es.tiburon.code.message;

import es.tiburon.code.user.User;

public class Contact {
	private User user;
	private int unread;
	
	public Contact(User user, int unread) {
		super();
		this.user = user;
		this.unread = unread;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getUnread() {
		return unread;
	}

	public void setUnread(int unread) {
		this.unread = unread;
	}
	
	
	
	
}
