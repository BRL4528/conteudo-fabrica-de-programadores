_____________________________________![download](https://user-images.githubusercontent.com/50926585/75395983-d39a5880-58c9-11ea-8400-674999678bb5.png) _____________________________________

# Desafio 01 Fabrica de Programadores 

## Código.

* JavaScript
* HTML
* CSS

### Este projeto consiste em criar um sistema de gerenciamento de um cinema hipotético (Cinema HT).

### 1 -Deverá ser criado um projeto com a seguinte estrutura:
    [css] - Diretório contendo todos os arquivos de estilo do projeto;
    [js] - Diretório contendo todos os arquivos JS;
    -> [modelo] - Diretório contendo todas as entidades do projeto (arquivos .js) Ps. As entidades serão
     citadas abaixo;
    [img] - Diretório contendo todas as imagens do projeto
    [/] - Arquivos .html


### 2 – Entidades:
    Dentro do diretório "modelo" ficarão as classes referentes às entidades do projeto, são elas:

### 1 – GerenciadorCinema - Classe responsável pela gerência do cinema como um todo
    Atributos:
    sessoes = [ ] - Array de objetos do tipo Sessao

### 2 – Cliente - Classe responsável por representar cada cliente do cinema
    Atributos:
    nome
    idade
    email

### 3 – Sala - Classe responsável por representar uma sala do cinema
    Atributos:
    identificador
    cadeiras: As cadeiras das salas são fixas: fileiras de A – F (10 cadeiras por
    fileira)
    Cada array representa uma fileira:
    A[ ]
    B[ ]
    C[ ] 
    D[ ]
    E[ ]
    F[ ]

### 4 – Sessao - Classe responsável por representar cada sessão do cinema
    Atributos:
    data - Data da sessão em questão
    horarioInicio - Horario de início da sessão
    legendado - Flag para saber se o filme é legendado ou dublado
    tresD - Flag para saber se o filme é 3D ou não
    sala = {} - Objeto Sala a qual essa sessão será executada

### 5 – Filme - Classe responsável por representar o filme
    Atributos:
    titulo - Título do filme
    classificacao - Classificação indicativa
    duracao - Duração do filme

### 6 – Cadeira – Objeto responsável por representar uma cadeira do cinema
    Atributos:
    ocupado – true = reservado, false = livre (default)

### 3 – CRUD’s:
    Todos os CRUDs do sistema deverão aplicar todas as funções básicas (Cadastro, Listagem, Edição e
    Exclusão)
    1 - Clientes
    2 - Salas
    3 - Sessões
    4 - Filmes
    5 - Usuário
    4 - Funções do Sistema:

### 1 - Alocar Cliente
    Essa função deve permitir que o operador do sistema, aloque um cliente em uma cadeira específica
    de uma determinada sessão. Uma vez alocado, esta cadeira em questão fica reservada e não pode ser atribuída
    novamente

### 2 – Consultar disponibilidade
    Essa função deverá exibir quais dos assentos da sessão estarão disponíveis.
    5 - Login e Logout:

### 1 - Login
    Deverá ser criada uma página de login onde o usuário deverá ser autenticado no sistema. [Utilizar
    LocalStorage].
    
### 2 - Logout
    Ao clicar no botão de logout, o usuário deverá ser redirecionado à tela de login e precisará se logar
    novamente para utilizar o sistema.ss
