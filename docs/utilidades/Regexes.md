# Identificar linhas que não contenham algo
Para capturar linhas que não contém uma palavra específica, pode ser usada a regex abaixo (vide [stackoverflow](https://stackoverflow.com/questions/406230/regular-expression-to-match-a-line-that-doesnt-contain-a-word)):
```js
^((?!palavra).)*$ //neste caso, linhas não contendo "palavra"
```