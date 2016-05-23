package es.tiburon.code.message;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import es.tiburon.code.follow.FollowController;
import es.tiburon.code.user.User;
import es.tiburon.code.user.UserComponent;
import es.tiburon.code.user.UserRepository;

@RestController
@RequestMapping("/message")
public class MessageController {
	private static final Logger log = LoggerFactory.getLogger(FollowController.class);
	
	@Autowired
	private MessageRepository mRepo;
	
	@Autowired
	private UserRepository uRepo;
	
	@Autowired
	private UserComponent userComponent;
	
	@RequestMapping(value="/",method = RequestMethod.GET)
	public Collection<Message> getMessages (){
		return mRepo.findAll();
	}
	
	@RequestMapping(value="/getChat",method = RequestMethod.PUT)
	@ResponseStatus(HttpStatus.OK)
	public Collection<Message> getChat (@RequestBody User user){
		User ulog = userComponent.getLoggedUser();
		List<Message> list = new ArrayList<Message>(mRepo.findByEmisorAndReceptor(user, ulog));
		list.addAll(mRepo.findByEmisorAndReceptor(ulog, user));
		Collections.sort(list, (a, b) -> b.compareTo(a));
		for(Message m : list){
			if(m.getState().contentEquals("unread") && m.getReceptor().getId() == ulog.getId()){
				m.setState("read");
				mRepo.save(m);
			}
		}
		log.info("chat con user {}",user.getNick());
		return list;
	}
	
	@RequestMapping(value="/contactList",method = RequestMethod.GET)
	@ResponseStatus(HttpStatus.OK)
	public List<Contact> getContactList (){
		User user = userComponent.getLoggedUser();
		Collection<Message> list = mRepo.findByEmisorOrReceptor(user,user);
		List<Contact> clist = new ArrayList<Contact>();
		for(Message m : list){
			if(m.getEmisor().getId() == user.getId() && !listContain(clist,m.getReceptor())){
				clist.add(new Contact(m.getReceptor(),unreadNumber(m.getReceptor())));
			}else if(m.getReceptor().getId() == user.getId() && !listContain(clist,m.getEmisor())){
				clist.add(new Contact(m.getEmisor(),unreadNumber(m.getEmisor())));
			}
		}
	
		log.info("Lista de contactos");
		return clist;
	}
	
	private boolean listContain(List<Contact> cl, User u){
		for(Contact c : cl){
			if(c.getUser().getNick().contentEquals(u.getNick())){
				return true;
			}
		}
		return false;
	}
	
	
	
	
	
	public int unreadNumber (User user){
		List<Message> list = new ArrayList<Message>(mRepo.findByEmisorAndReceptor(user, userComponent.getLoggedUser()));
		int cont = 0;
		for(Message m : list){
			if(m.getState().contentEquals("unread")){
				cont++;
			}
		}
		return cont;
		
	}
	
	
	@RequestMapping(value="/add",method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	public Message addMessage (@RequestBody Message message){
		System.out.println(message.getDate());
		Message m = new Message(message.getDate(),message.getEmisor(),message.getReceptor(),message.getMessage(),"unread");
		mRepo.save(m);
		
		log.info("creado mensaje: {} - {}",m.getEmisor(),m.getReceptor());
		return m;
		
		
	}

}
