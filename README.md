# Community One API

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

API REST desenvolvida para o gerenciamento de membros e atividades de comunidades e igrejas. O projeto foi construído com foco em escalabilidade e manutenibilidade, utilizando o ecossistema NestJS.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **[NestJS](https://nestjs.com/)**: Um framework Node.js progressivo para construir aplicações eficientes, confiáveis e escaláveis.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript que adiciona tipagem estática.
- **[TypeORM](https://typeorm.io/)**: Um ORM (Object-Relational Mapper) para TypeScript e JavaScript.
- **[PostgreSQL](https://www.postgresql.org/)**: Um poderoso sistema de banco de dados relacional de código aberto.
- **[Docker](https://www.docker.com/)**: Para garantir um ambiente de desenvolvimento e produção consistente e conteinerizado.
- **[Jest](https://jestjs.io/)**: Framework de testes em JavaScript com foco na simplicidade.
- **[ESLint](https://eslint.org/)** e **[Prettier](https://prettier.io/)**: Para garantir a qualidade e a padronização do código.

---

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:

- [NVM](https://github.com/nvm-sh/nvm)
- [Node.js](https://nodejs.org/en/) (versão v22.16.0 ou superior)
- [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)

---

## ⚙️ Instalação e Configuração

Siga os passos abaixo para configurar o ambiente de desenvolvimento local.

**1. Clone o repositório**

**2. Crie um .env na raiz do projeto, você pode copiar o .env.example, atualize as envs conforme necessário**

**3. Instale as dependências:**

```bash
nvm use
npm install
```

---

## ▶️ Executando a Aplicação

Para iniciar a aplicação em ambiente de desenvolvimento com Docker, use o comando:

```bash
docker compose -f docker-compose.dev.yaml up --build
```

A API estará disponível em `http://localhost:8080` (ou na `API_PORT_EXTERNAL` que você definiu).

### Scripts Disponíveis

Você também pode rodar os seguintes scripts `npm` (geralmente dentro do contêiner ou localmente se o banco estiver acessível):

```bash
# Modo de desenvolvimento com watch
npm run start:dev

# Modo de produção
npm run start:prod

# Modo de depuração
npm run start:debug
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
