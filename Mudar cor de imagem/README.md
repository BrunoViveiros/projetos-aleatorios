Beleza para resolver o problema do `SVG` do dia 29/07 não estar mudando de cor.
Dei uma procurada por cima e descobri mais ou menos isso.

Pelo que eu entendi:
O arquivo não muda de cor com `fill: color` pelo simples fato de ele não ser realmente um arquivo `SVG` mais sim um `PNG` "encapsulado" como um `SVG`.

```html
<svg width="86" height="86" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="357 2080 86 86">
<image xlink:href="data:image/png;base64, ......" width="86" height="86" x="357" y="2080"/>
</svg>
```
a tag `image` passa como parametro um `xlink:href` onde é usado uma imagem em base64 `data:image/png;base64`.

![Imagem Original](https://github.com/RayZyphs/conteudo-aleatorio/blob/master/Mudar%20cor%20de%20imagem/assets/imagemOriginal.png?raw=true)


Em resumo a imagem é um `PNG` e não um `SVG` logo temos duas opções.

1. Mudar a cor da imagem pela cor desejada pelo photoshop ou outro programa parecido assim resolvendo o problema.

Como exemplo vou utilizar esse site http://hsl.imageonline.co/
Ai é só mecher na tonalidade brilho e saturação até a cor desejada. Para facilitar no nosso caso utilizei:
```
Hue shift: -90
Saturation: 100
Lightness: 45
```
![Imagem Site1](https://github.com/RayZyphs/conteudo-aleatorio/blob/master/Mudar%20cor%20de%20imagem/assets/site1.png?raw=true)
Que deixou com uma cor bem parecida.

![Imagem Site2](https://github.com/RayZyphs/conteudo-aleatorio/blob/master/Mudar%20cor%20de%20imagem/assets/site2.png)

OU

2. Fazer uma gambiarra totalmente desnecessaria porem divertida.
  Para isso utilizarei esse codigo do codepen https://codepen.io/RayZyphs/full/GVWjrb , ele faz com que a cor da imagem fique com a cor que voce deseja.

Porem para funcionar corretamente antes precisamos deixar a imagem com a cor preta. Para isso basta utilizar estes filtros em sua classe css. 

```css
.imagem {
filter: brightness(0) saturate(100%);
}
```

![Imagem Preta](https://github.com/RayZyphs/conteudo-aleatorio/blob/master/Mudar%20cor%20de%20imagem/assets/imagemBlack.png?raw=true)

Após isso selecione a cor desejada e a cole no input `Target color` no nosso caso a cor é `#87BF52`. Clique no botão `Compute Filters` até que a taixa de loss fique com um valor de ` This is a perfect result`. Após isso copie o filtro que lhe é dado, no nosso caso:

![Imagem CodePen]()

```css
filter: invert(71%) sepia(28%) saturate(732%) hue-rotate(48deg) brightness(91%) contrast(91%);
```

Agora adicione esse codigo a frente do primeiro filtro ficando assim:

**ATENÇÂO** Não crie outro filter adicione no mesmo senão ira dar errado

```css
.imagem {
filter: brightness(0) saturate(100%) invert(71%) sepia(28%) saturate(732%) hue-rotate(48deg) brightness(91%) contrast(91%);
}
```

![Imagem Final](https://github.com/RayZyphs/conteudo-aleatorio/blob/master/Mudar%20cor%20de%20imagem/assets/imagemFinal.png?raw=true)

e pronto agora sua imagem deve estar na cor desejada.
abaixo segue um codepen do exemplo.

https://codepen.io/RayZyphs/pen/LwWRjg



![](logo_small.png)

Move along.
