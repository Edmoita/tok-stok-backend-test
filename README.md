# tok-stok-backend-test
Teste técnico para desenvolvedor back end no projeto da Tok&amp;Stok

## Índice

  - [Sobre](#sobre)
  - [Tecnologias](#tecnologias)
  - [Como executar](#como-executar)
  - [Playground](#playground)
  - [Escopo mínimo](#escopo-mínimo)
  - [Diferencial](#diferencial)
  - [Outras melhorias](#outras-melhorias)

---
### Sobre

Teste técnico para desenvolvedor back end no projeto da Tok&amp;Stok

---

### Tecnologias

- Linguagem: TypeScript
- Runtime: Node
- Framework Web: Next
- Servidor GraphQL: Apollo Server
- Banco de Dados: MongoDB
- ODM: Mongoose
- Linter: ESLint
- Formatter: Prettier
- CI/CD: GitHub Actions
- DBaaS: MongoDB Atlas
- PaaS: Heroku

---

### Como executar

```bash

    # Clone o repositório
    $ git clone https://github.com/Edmoita/tok-stok-backend-test

    # Entre no diretório
    $ cd tok-stok-backend-test

    # Crie uma cópia do arquivo de configuração do docker
    $ cp docker-compose.yml.example docker-compose.yml

    # Crie uma cópia do arquivo com as variáveis de ambiente
    $ cp .env.example .env

    # Instale as dependências
    $ yarn install

    # Inicie e execute o aplicativo
    $ docker-compose up

    # Para executar os testes, faça
    $ docker exec tok-stok-backend-test yarn test
```
---
### Playground
Acesse o GraphQL Playground:
- Development: [http://localhost:3000/api/graphql](http://localhost:3000/api/graphql)
- Production: [https://tok-stok-api.herokuapp.com/api/graphql](https://tok-stok-api.herokuapp.com/)


---

### Escopo mínimo
- [X] Implementar CRUD de Produtos;
- [X] Implementar CRUD de Vitrines;
- [X] Ao consultar os produtos de uma vitrine os preços precisam refletir o valor percentual de desconto;
- [X] A aplicação precisa disponibilizar as queries e mutations via Playground/Postman;
- [X] A aplicação deve ser desenvolvida utilizando Node.js, Apollo Server e Next.js;
- [X] Usar TypeScript como linguagem;
- [X] O serviço deve armazenar informações em um banco de dados.
- [X] O projeto deve ter um README.md com todas as instruções sobre como executar e testar o projeto e os serviços disponibilizados.
- [X] O projeto deve utilizar Git como ferramenta de controle de versão.
- [X] Publicar o projeto em algum serviço como Heroku, Vercel, Netlify, Google Cloud App Engine.

---
### Diferencial
- [ ] Conter testes unitários é um diferencial.
- [X] Usar conteinerização com Docker é um diferencial.
- [X] Implementar CI/CD (com GitHub Actions, Travis CI e similares) é um diferencial.

