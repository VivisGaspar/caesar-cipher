# Cifra de César

## Introdução

A Cifra de César também conhecida como cifra de troca, código de César ou troca César, trata-se de uma das mais antigas técnicas de criptografia, onde consiste na substituição por deslocamento ao qual uma letra do texto é substituída por outra. Por exemplo, com o deslocamento escolhido, podemos ver na imagem abaixo que a partir da letra A andando três posições de deslocamento, seria substituído pela letra D, B se tornaria E, e assim por diante.
O método de criptografia é uma homenagem a Júlio César, que utilizava para comunicação com seus generais em campo de guerra.

![caeser](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/1920px-Caesar3.svg.png)

![caeser-cipher](https://i.ibb.co/25X16pg/diagrama-de-blocos.png)

### Considerações gerais

Este projeto foi desenvolvido para o Bootcamp da Laboratoria com o objetivo de construir aplicação web usando conhecimento de **User Experience Design** , **JavaScript(ES6)** e **CSS3**.

Foram criadas três funções dentro do objeto **cipher** chamadas **encode**, **decode** e **load**, onde elas possuem a estrutura a seguir:

`cipher.encode(offset, string)`: O parâmetro offset recebe o número de posições que usuário deseja deslocar para a **direita** e o parâmetro string recebe a palavra a ser criptografada.

`cipher.decode(offset, string)`: O parâmetro offset recebe o número de posições que usuário deseja deslocar para a **esquerda** e o parâmetro string recebe a palavra a ser descriptografada.

`cipher.load()`: Ela é carregada no evento **onload** da página, onde são adicionados os eventos de **onclick**.

Abaixo Diagrama de blocos como forma de representação gráfica do algoritmo para compreensão lógica utilizada.

Fonte:[Wikipedia](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
