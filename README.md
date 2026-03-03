# calcDispositivoMovel
Projeto da disciplina PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS para calculadora feita pelo expo.dev



## Fluxo
Clique inicial (assumindo número)<br/>
-> definir como componente 1<br/>
-> caso clique número novamente, adicionar na string<br/>
-> para transição de fase, tem que ser clicado "meio"<br/>

clique "meio" (+,-,*,/)<br/>
-> caso o componente 1 não seja inválido, definir como modo de operação<br/>
-> passar como componente 2<br/>

clique final (numero)<br/>
-> adicionar o numero como componente 3<br/>
-> caso clique número novamente, adicionar no numero<br/>

Por enquanto, apenas operação simples (2 digitos, um operação)<br/>
->clicar o "=" para definir como final e enviar argumentos para ser calculado, por exemplo:<br/>
componente 1: "49"<br/>
componente 2: "/"<br/>
componente 3: "7"<br/>
finalizado via "="<br/>
calculado
mostrado em um display no topo (Reservado)

## Requisitos funcional
-> 

## Requisitos não funcionais
### Design
barra de display estilizada<br/>
grid em 4, os 3 primeiros são números, o último sendo o resto<br/>
grid planejado:<br/>
**1 2 3 +<br/>**
**4 5 6 -<br/>**
**7 8 9 x<br/>**
**0 / . =<br/>**
**RESET (botao 3x1) √<br/>**
### Coloração
Utilização de cores típicas de calculadora (tons de cinza, laranja)
### Display
Display no topo estilizado tal qual um display de calculadora física
