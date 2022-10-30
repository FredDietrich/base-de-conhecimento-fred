## Conversão para number

É possível converter algo para number utilizando o atalho `+` no js. Irá retornar um number parseado a partir da variável, ou NaN (not a number), conforme exemplos:
```js
+oQueQuiserConverter
typeof +"2" //retorno esperado: "number"
+"2" + +"2" //retorno esperado: 4
+"abacaxi" //retorno esperado: NaN
```

## Conversão truthy/falsey para boolean

Em muitos casos utilizamos não booleanos em contexto booleano, e isto é ok, mas em casos de type safety onde precisamos de um boolean, mas temos um truthy/falsey, é possível utilizar o atalho `!!`, o primeiro exclamação irá inverter a condição, retornando o contrário do esperado, já em boolean, o segundo, é apenas para que não se perca o valor original, reinvertendo. Conforme exemplos:
```js
const truthy = 123
const falsey = ""
typeof !!truthy //retorno esperado: "boolean"
typeof !!falsey //retorno esperado: "boolean"
```