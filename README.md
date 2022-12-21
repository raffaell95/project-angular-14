## Album de fotos desenvolvido com angular na versão 14.X.X


### Instruções para instalação do BackEnd
#### **Sem docker**
O Backend usa o node na versão 8.11.2, se optar por subir o projeto sem docker basta instalar essa versão do node rodar `npm install` seguido de `npm start`, e o projeto já estara rodando na porta http://localhost:3000

você poderá encontrar a versão utilizada do node nesse link: https://nodejs.org/ru/blog/release/v8.11.2/

##### **Com Docker**
Para subir o backend com docker basta realizar os seguintes passos:
 1. Entrar na pasta backend via terminal
 2. digitar `docker-compose up -d` apos o build o backend estará rodando na porta http://localhost:3000
 
 * Outros comandos uteis docker composer
   - para rebuildar o container do projeto basta entrar na pasta backend via terminal e digitar `docker-compose up -d --build`
   - Para remover o container basta entrar na pasta backend e digitar `docker-compose down`
   
 para mais comando docker visite a documentação oficial em https://docs.docker.com/compose/reference/
 
 
### Instruções para instalação do FrontEnd

#### Para rodar o projeto angular basta entrar na pasta frontend via terminal e digitar `npm install` e em seguida digitar `npm start´ ou `ng serve`, o projeto estará rodando na porta localhost: 4200.

Versão do Angular: 14.2.0




_Nota: Esse projeto é uma atualização de alguns conteúdos ministradso na plataforma Alura pelo professor Flavio Almeida com Angular na versão 6.X.X,
o objetivo desse projeto é apenas atualizar os recursos utilizados nos treinamentos, para uma versão mais recente da ferramenta, o uso é somente para fins didáticos e pesquisa._
