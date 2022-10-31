## ?? vs || (nullish coalescing vs falsey coalescing)

Ambos parecem fazer o mesmo, mas tem uma diferença importante, `??` retorna o primeiro valor não nullish, enquanto `||` retorna o primeiro valor não falsey, conforme exemplos:
```ts
const falsey = 0;
const naoDefinida;
falsey || 15000 //retorno esperado: 15000
falsey ?? 15000 //retorno esperado: 0
naoDefinida || 15000 //retorno esperado: 15000
naoDefinida ?? 15000 //retorno esperado: 15000
```
