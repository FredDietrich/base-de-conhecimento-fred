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
 		String oiEmPortugues = portuguesTradutor.oi("fred");
 		String oiEmIngles = inglesTradutor.oi("Fred");
		System.out.println(oiEmPortugues);
        System.out.println(oiEmIngles);
	}
}
```