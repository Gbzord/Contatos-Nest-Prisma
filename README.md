<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="100" alt="NestJS Logo" />
  </a>
</p>
<h1 align="center">contatos-nest</h1>
<p align="center">
  Laboratório de integração <strong>NestJS + Prisma ORM</strong> — análise de comportamento de conexão, breaking changes e estabilidade entre versões do Prisma.
</p>
<p align="center">
  <img src="https://img.shields.io/badge/NestJS-11.x-E0234E?style=flat-square&logo=nestjs&logoColor=white" alt="NestJS" />
  <img src="https://img.shields.io/badge/Prisma-5.x%20%7C%207.x-2D3748?style=flat-square&logo=prisma&logoColor=white" alt="Prisma" />
  <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/MySQL-8.x-4479A1?style=flat-square&logo=mysql&logoColor=white" alt="MySQL" />
  <img src="https://img.shields.io/badge/Node.js-LTS-339933?style=flat-square&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/license-UNLICENSED-lightgrey?style=flat-square" alt="License" />
</p>

---
📋 Visão Geral
Este repositório é um ambiente de pesquisa e experimentação focado em mapear o comportamento da integração entre o framework NestJS e o Prisma ORM em diferentes versões principais (v5 e v7). O objetivo central é documentar diferenças de API, breaking changes, padrões de conexão e eventuais instabilidades que surgem ao migrar entre versões do Prisma dentro de um projeto NestJS.
---

🎯 Objetivos do Estudo
Analisar a estabilidade da conexão e mudanças de breaking changes entre as versões:

 --> Prisma @5.x

 --> Prisma @7.x


🛠️ Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

Node.js LTS — versão LTS recomendada
--
NPM ou Yarn — gerenciador de pacotes
--
MySQL 8.x — instância local ou via Docker
--


⚙️ Configuração do Ambiente
1. Clone o repositório
bash git clone <url-do-repositorio>
cd contatos-nest

3. Instale as dependências
bash npm install

5. Configure as variáveis de ambiente
Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

# Database Configuration
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=sua_senha
DATABASE_NAME=contatos_db


# Prisma Connection URL
  DATABASE_URL="mysql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}?debug=true"

⚠️ O arquivo .env já está listado no .gitignore. Nunca comite credenciais reais.


🚀 Executando a Aplicação
# Desenvolvimento 
npm run start:dev

# Desenvolvimento padrão
npm run start


🧪 Testes
# Testes unitários
npm run test


🤝
Este é um repositório de estudo pessoal, mas sugestões e issues são bem-vindas. Caso identifique algum comportamento não documentado em alguma versão do Prisma, abra uma issue com:

Versão do Prisma utilizada
Versão do Node.js e SO
Comportamento esperado vs. comportamento observado
Stack trace completo (se aplicável)

