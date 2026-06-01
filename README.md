# Gerenciador de Tarefas — API

API REST para gerenciamento de tarefas de equipe, desenvolvida com NestJS, Prisma e PostgreSQL.

---

## 🚀 Tecnologias

- Node.js v24
- NestJS 11
- Prisma 7
- PostgreSQL
- TypeScript

---

## ⚙️ Como rodar o projeto

### Pré-requisitos
- Node.js v24+
- PostgreSQL instalado e rodando

### Instalação

**1. Clone o repositório:**
```bash
git clone 
cd gerenciador-tarefas
```

**2. Instale as dependências:**
```bash
npm install
```

**3. Configure o banco de dados:**

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/gerenciador-tarefas"
```

**4. Rode as migrations:**
```bash
npx prisma migrate dev
```

**5. Gere o Prisma Client:**
```bash
npx prisma generate
```

**6. Inicie o servidor:**
```bash
npm run start:dev
```

O servidor estará rodando em `http://localhost:3000`

---

## 📚 Documentação

Acesse a documentação completa da API via Swagger:
http://localhost:3000/api

---

## 👥 Hierarquia de usuários

| Cargo | Permissões |
|---|---|
| `CHEFE` | Criar, editar e deletar tarefas, adicionar colaboradores |
| `FUNCIONARIO` | Visualizar tarefas, comentar, concluir tarefas |

### Header obrigatório nas rotas protegidas:
usuario-id: <id do usuário>

---

## 🗺️ Rotas principais

### Usuários
| Método | Rota | Descrição |
|---|---|---|
| POST | `/usuarios` | Criar usuário |
| GET | `/usuarios` | Listar usuários |
| GET | `/usuarios/:id` | Buscar usuário |
| PATCH | `/usuarios/:id` | Atualizar usuário |
| DELETE | `/usuarios/:id` | Deletar usuário |

### Tarefas
| Método | Rota | Descrição | Permissão |
|---|---|---|---|
| POST | `/tarefas` | Criar tarefa | CHEFE |
| GET | `/tarefas` | Listar tarefas | Livre |
| GET | `/tarefas/atrasadas` | Tarefas atrasadas | Livre |
| GET | `/tarefas/:id` | Buscar tarefa | Livre |
| PATCH | `/tarefas/:id` | Atualizar tarefa | CHEFE |
| PATCH | `/tarefas/:id/concluir` | Concluir tarefa | Livre |
| DELETE | `/tarefas/:id` | Deletar tarefa | CHEFE |

### Colaboradores
| Método | Rota | Descrição | Permissão |
|---|---|---|---|
| POST | `/tarefas/:id/colaboradores` | Adicionar colaborador | CHEFE |
| GET | `/tarefas/:id/colaboradores` | Listar colaboradores | Livre |
| DELETE | `/tarefas/:id/colaboradores/:usuarioId` | Remover colaborador | CHEFE |

### Comentários
| Método | Rota | Descrição |
|---|---|---|
| POST | `/comentarios` | Criar comentário |
| GET | `/comentarios` | Listar comentários |
| GET | `/comentarios/tarefa/:tarefaId` | Comentários por tarefa |
| GET | `/comentarios/:id` | Buscar comentário |
| PATCH | `/comentarios/:id` | Atualizar comentário |
| DELETE | `/comentarios/:id` | Deletar comentário |

### Score
| Método | Rota | Descrição |
|---|---|---|
| GET | `/score/ranking` | Ranking de funcionários |
| GET | `/score/usuario/:usuarioId` | Score por usuário |

---

## 🏆 Sistema de Score

O score é gerado automaticamente ao concluir uma tarefa:

- Cada dia restante até o prazo vale **10 pontos**
- Se a tarefa já estiver atrasada vale **5 pontos**

---

## 🗄️ Banco de dados

O projeto possui 5 tabelas:

- `usuarios` — cadastro de usuários e cargos
- `tarefas` — gerenciamento de tarefas
- `comentarios` — comentários por tarefa
- `scores` — histórico de pontuação
- `tarefa_colaboradores` — colaboradores por tarefa

---