package es.tiburon.code.valoration;

import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;


@Component
@Scope(value = WebApplicationContext.SCOPE_SESSION, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class ValorationComponent {
	private Valoration val;

	public Valoration getValoration() {
		return val;
	}

	public void setValoration(Valoration val) {
		this.val = val;
	}

	public boolean isValoration() {
		return this.val != null;
	}

}
