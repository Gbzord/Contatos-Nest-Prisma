<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 📋 Contatos NestJS + Prisma v7

API REST completa para gerenciamento de contatos construída com **NestJS**, **Prisma ORM v7** e **PostgreSQL (Supabase)**.

## 🎯 Características

- ✅ CRUD completo de contatos (Create, Read, Update, Delete)
- ✅ Integração com Prisma ORM v7
- ✅ PostgreSQL via Supabase
- ✅ Tipagem completa com TypeScript
- ✅ Validação com DTOs
- ✅ Tratamento de erros robusto
- ✅ Rotas RESTful bem documentadas
- ✅ Hot reload em desenvolvimento

---

## 🚀 Quick Start

### 1️⃣ Pré-requisitos

- **Node.js** v18+ (v24 testado)
- **NPM** ou **Yarn**
- **Conta Supabase** (gratuita em [supabase.com](https://supabase.com))

### 2️⃣ Instalação

```bash
# Clonar ou acessar o repositório
cd contatos-nest-main

# Instalar dependências
npm install
```

### 3️⃣ Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Database Connection (Supabase PostgreSQL)
DATABASE_URL="postgresql://postgres:<senha>@<host>:5432/postgres?schema=public&sslmode=require"
```

**Onde obter a URL:**
1. Acesse [app.supabase.com](https://app.supabase.com)
2. Selecione seu projeto
3. Vá em **Settings** → **Database**
4. Copie a **Connection String** (PostgreSQL)

### 4️⃣ Gerar Cliente Prisma

```bash
npm run prisma:generate
```

### 5️⃣ Sincronizar Banco de Dados

```bash
npm run prisma:db:push
```

### 6️⃣ Iniciar Aplicação

```bash
npm run start:dev
```

Acesse: **http://localhost:3000**

---

## 📚 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run build` | Compilar TypeScript para JavaScript |
| `npm run start` | Executar em produção |
| `npm run start:dev` | Executar em desenvolvimento com hot reload |
| `npm run start:debug` | Executar com debugger e hot reload |
| `npm run start:prod` | Executar build em produção |
| `npm run lint` | Executar ESLint e corrigir código |
| `npm run format` | Formatar código com Prettier |
| `npm run test` | Executar testes unitários |
| `npm run test:watch` | Testes em modo watch |
| `npm run test:cov` | Cobertura de testes |
| `npm run test:e2e` | Testes end-to-end |
| `npm run prisma:generate` | Gerar cliente Prisma |
| `npm run prisma:db:push` | Sincronizar schema com banco |
| `npm run prisma:migrate` | Criar e executar migrações |
| `npm run prisma:studio` | Abrir Prisma Studio (GUI) |

---

## 🛣️ Rotas da API

### Base URL: `http://localhost:3000`

#### 1. Listar Todos os Contatos
```http
GET /contacts
```
**Resposta (200):**
```json
[
  {
    "id": "abc123",
    "name": "João Silva",
    "email": "joao@example.com",
    "phone": "11987654321",
    "createdAt": "2026-05-05T20:34:22.000Z",
    "updatedAt": "2026-05-05T20:34:22.000Z"
  }
]
```

#### 2. Criar Novo Contato
```http
POST /contacts
Content-Type: application/json

{
  "name": "Maria Santos",
  "email": "maria@example.com",
  "phone": "11987654322"
}
```
**Resposta (201):**
```json
{
  "id": "xyz789",
  "name": "Maria Santos",
  "email": "maria@example.com",
  "phone": "11987654322",
  "createdAt": "2026-05-05T20:34:22.000Z",
  "updatedAt": "2026-05-05T20:34:22.000Z"
}
```

#### 3. Buscar Contato por ID
```http
GET /contacts/:id
```
**Exemplo:**
```http
GET /contacts/abc123
```
**Resposta (200):**
```json
{
  "id": "abc123",
  "name": "João Silva",
  "email": "joao@example.com",
  "phone": "11987654321",
  "createdAt": "2026-05-05T20:34:22.000Z",
  "updatedAt": "2026-05-05T20:34:22.000Z"
}
```

#### 4. Atualizar Contato
```http
PUT /contacts/:id
Content-Type: application/json

{
  "name": "João Silva Atualizado",
  "email": "joao.novo@example.com"
}
```
**Resposta (200):**
```json
{
  "id": "abc123",
  "name": "João Silva Atualizado",
  "email": "joao.novo@example.com",
  "phone": "11987654321",
  "createdAt": "2026-05-05T20:34:22.000Z",
  "updatedAt": "2026-05-05T20:35:10.000Z"
}
```

#### 5. Deletar Contato
```http
DELETE /contacts/:id
```
**Exemplo:**
```http
DELETE /contacts/abc123
```
**Resposta (204):** Sem conteúdo

---

## 📁 Estrutura do Projeto

```
contatos-nest-main/
├── src/
│   ├── contacts/                 # Módulo de contatos
│   │   ├── contacts.controller.ts
│   │   ├── contacts.module.ts
│   │   ├── contacts.service.ts
│   │   └── dto/
│   │       ├── create-contact.dto.ts
│   │       └── update-contact.dto.ts
│   ├── prisma/                   # Módulo Prisma
│   │   ├── prisma.module.ts
│   │   └── prisma.service.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts                   # Entrada da aplicação
├── prisma/
│   └── schema.prisma             # Schema do banco de dados
├── dist/                         # Build compilado
├── generated/
│   └── prisma/                   # Cliente Prisma gerado
├── test/                         # Testes
├── .env                          # Variáveis de ambiente
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🗄️ Schema do Banco de Dados

### Modelo Contact

```prisma
model Contact {
  id         String   @id @default(cuid())      # ID único
  name       String                             # Nome do contato
  email      String   @unique                   # Email único
  phone      String?                            # Telefone (opcional)
  createdAt  DateTime @default(now())           # Data de criação
  updatedAt  DateTime @updatedAt                # Última atualização
}
```

**Campos:**
- `id`: Identificador único (cuid)
- `name`: Nome completo (obrigatório)
- `email`: Email único (obrigatório)
- `phone`: Número de telefone (opcional)
- `createdAt`: Timestamp automático de criação
- `updatedAt`: Timestamp automático de atualização

---

## 🔧 Troubleshooting

### ❌ Erro: "PrismaClient not available"

**Solução:**
```bash
npm run prisma:generate
```

### ❌ Erro de Conexão com Banco de Dados

**Verificar:**
1. `.env` está configurado corretamente
2. URL do Supabase é válida
3. Supabase está online (verifique no dashboard)
4. Firewall não está bloqueando a conexão

### ❌ Porta 3000 já está em uso

**Solução:**
```bash
# Linux/Mac
lsof -i :3000
kill -9 <PID>

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### ❌ Erro ao fazer `npm install`

**Solução:**
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 🧪 Testando a API

### Com cURL

```bash
# Listar todos
curl http://localhost:3000/contacts

# Criar contato
curl -X POST http://localhost:3000/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Teste",
    "email": "teste@example.com",
    "phone": "1234567890"
  }'

# Buscar contato
curl http://localhost:3000/contacts/abc123

# Atualizar contato
curl -X PUT http://localhost:3000/contacts/abc123 \
  -H "Content-Type: application/json" \
  -d '{"name": "Novo Nome"}'

# Deletar contato
curl -X DELETE http://localhost:3000/contacts/abc123
```

### Com Postman

1. Importe a collection ou crie manualmente as requisições
2. Use as rotas acima com os respectivos métodos HTTP
3. Configure headers: `Content-Type: application/json`

### Com Insomnia/Thunder Client

Mesma configuração que Postman

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Uso |
|-----------|--------|-----|
| NestJS | ^11.0.1 | Framework web |
| TypeScript | ^5.7.3 | Linguagem |
| Prisma | ^7.8.0 | ORM |
| PostgreSQL | - | Banco via Supabase |
| Express | ^5.0.0 | Servidor web |
| Jest | ^30.0.0 | Testes |
| ESLint | ^9.18.0 | Linting |
| Prettier | ^3.4.2 | Formatação |

---

## 👤 Autor

Projeto desenvolvido com foco em estudar integração **NestJS + Prisma ORM**.

---

## 📄 Licença

UNLICENSED

---

## 💡 Dicas Úteis

### Visualizar Banco de Dados

```bash
npm run prisma:studio
```

Abre uma GUI interativa do Prisma Studio na porta 5555.

### Criar Migração

```bash
npm run prisma:migrate

# Digite o nome da migração quando solicitado
```

### Resetar Banco de Dados

```bash
# Cuidado! Isso deleta todos os dados
npx prisma migrate reset
```

---

## 🚀 Deploy

### Render.com (Recomendado)

1. Conecte seu repositório GitHub
2. Defina variáveis de ambiente no dashboard
3. Selecione o ramo `main`
4. Deploy automático em cada push

### Vercel

Não recomendado para Prisma com banco de dados persistente.

### Railway.app

1. Crie um projeto
2. Conecte seu repositório
3. Defina `DATABASE_URL`
4. Railway faz deploy automático

---

## 📞 Suporte

Para erros ou dúvidas:
1. Verifique a seção **Troubleshooting**
2. Consulte a [documentação do NestJS](https://docs.nestjs.com)
3. Consulte a [documentação do Prisma](https://www.prisma.io/docs/)
4. Abra uma issue no repositório

---

**Última atualização:** 05/05/2026  
**Status:** ✅ Funcional e em produção
