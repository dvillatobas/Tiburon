package es.tiburon.code.follow;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/follow")
public class FollowController {
	private static final Logger log = LoggerFactory.getLogger(FollowController.class);
	
	@Autowired
	private FollowRepository fRepo;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public Collection<Follow> getFolow(){
		log.info("follow findAll");
		return fRepo.findAll();
	}
}
