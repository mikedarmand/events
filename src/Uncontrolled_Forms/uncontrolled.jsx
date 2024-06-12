export function UncontrolledLogin() {
	function onLogin(event) {
	  event.preventDefault();
  

	  const formData = new FormData(event.target);
	  const username = formData.get('username');
	  const password = formData.get('password');
	  const remember = formData.get('remember') === 'on'; 
  
	  console.log({ username, password, remember });
	}
  
	return (
	  <form onSubmit={onLogin}>
		<input data-testid="username" name="username" type="text" placeholder="Username" />
		<input data-testid="password" name="password" type="password" placeholder="Password" />
		<input data-testid="remember" name="remember" type="checkbox" /> Ricordami
		<br />
		<button>Login</button>
		<button type="reset">Reset</button>
	  </form>
	);
  }
  
  // Vantaggi e svantaggi dell'utilizzo di FormData
  // Vantaggi:
  // * Recupera tutti i valori del form in un singolo oggetto.
  // * Gestisce automaticamente valori di diversi tipi di input (testo, file, checkbox, ecc.).
  // * Semplifica la gestione di form con molti campi.
  // Svantaggi:
  // * Richiede un passaggio in più per accedere ai singoli valori tramite formData.get('name').
  // * Non permette la convalida dei dati all'interno del componente.
  