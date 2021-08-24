# Objetivo

Esse repositório tem como função retornar dados (nome, massa, se há ou não estação) de todos os exoplanetas onde é possível instalar uma estação de carregamento de naves espaciais (exoplanetas com gravidade maior que 10 jupiter mass). Também é possível realizar as operações de criar, deletar e excluir algum exoplaneta à partir do seu nome.

# Configuração do ambiente

Você precisará dos seguintes programas:

- [Node](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [MySQL](https://www.mysql.com/)

## Utilização do programa

# Criação do banco de dados

Para rodar a base de dados na sua máquina, preencher as informações comentadas no código do banco de dados local no arquivo './voltbras-challenge/scrapping.py' e então executar o arquivo. Esse arquivo criará o schema e a tabela com as informações dos planetas onde é possível instalar uma estação de carregamento.

# Consultar suitablePlanets pela API GraphQL

Para consultar quais exoplanetas é possível instalar uma estação de carregamento, basta rodar no seu terminal na pasta '.\voltbras-challenge'. o seguinte código:

```bash
npm start
```

O comando rodará na porta 4000 do localhost do seu computador. Assim, basta acessar a [API](http://localhost:4000/) e fazer a seguinte consulta:

```bash
{
  suitablePlanets {
    name
    mass
    hasStation
  }
}
```

# Realizar operações com o banco de dados

Para realizar operações como criar novos planetas no banco de dados, atualizar informações já existentes ou deletar basta seguir as instruções comentadas nos arquivos da pasta '.\voltbras-challenge\database\crud'.
