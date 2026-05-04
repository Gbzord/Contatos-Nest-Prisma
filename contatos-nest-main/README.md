<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Laboratório de Conexão: NestJS + Prisma

Este projeto é um ambiente de testes dedicado a investigar comportamentos, performance e possíveis conflitos de conexão ao integrar o **NestJS** com diferentes versões do **Prisma ORM** (v5, v6 e v7).

## 🚀 Objetivo do Estudo
Analisar a estabilidade da conexão e mudanças de breaking changes entre as versões:
- [x] Prisma @5.x

- [x] Prisma @7.x

---

## 🛠️ Pré-requisitos
* Node.js (LTS recomendado)
* MySQL Instance (Docker ou Local)
* Gerenciador de pacotes (NPM ou Yarn)

## ⚙️ Configuração de Ambiente

Crie um arquivo `.env` na raiz do projeto e configure as variáveis conforme o exemplo abaixo:
```env
# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=sua_senha
DATABASE_NAME=contatos_db

# Prisma Connection URL
DATABASE_URL="mysql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?debug=true"
