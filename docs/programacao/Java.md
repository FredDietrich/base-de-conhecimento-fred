## Implementando interfaces sem classe própria

Em alguns casos, precisamos rapidamente implementar uma interface (comum em callbacks do retrofit, por exemplo), para isso, podemos usar a keyword `new` diretamente, conforme exemplo:
```java
interface ICumprimentadorTraduzido {
    String oi(String nome);
}

public class Main {
	public static void main(String[] args) {
		ICumprimentadorTraduzido portuguesTradutor = new ICumprimentadorTraduzido() {
		    @Override
		    public String oi(String nome) {
		        return "Oi " + nome;
		    }
		};
		ICumprimentadorTraduzido inglesTradutor = new ICumprimentadorTraduzido() {
		    @Override
		    public String oi(String nome) {
		        return "Hi " + nome;
		    }
		};
		// Também é possível usar lambda, do Java 8:
		ICumprimentadorTraduzido espanholTradutor = (String nome) -> "Hola " + nome;
 		String oiEmPortugues = portuguesTradutor.oi("Fred");
 		String oiEmIngles = inglesTradutor.oi("Fred");
 		String oiEmEspanhol = espanholTradutor.oi("Fred");
		System.out.println(oiEmPortugues); // -> Oi Fred
        System.out.println(oiEmIngles); // -> Hi Fred
        System.out.prinln(oiEmEspanhol); // -> Hola Fred
	}
}
```