package es.tiburon.code.valoration;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;

import es.tiburon.code.valoracion;


@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ValorationComponent {
	private Valoration val;

	public Valoration getLoggedUser() {
		return val;
	}

	public void setLoggedUser(Valoration val) {
		this.val = val;
	}

	public boolean isLoggedUser() {
		return this.val != null;
	}

}
