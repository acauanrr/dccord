# Projeto Web Chat da Disciplina - DCC704 - UFRR
## Backend and Frontend com Nextjs - Nodejs - MongoDB e WebSockets

## Banco de Dados
- Para rodar esse projeto dovê deve ter um Servidor de Banco de Dados rodando localmente ou ter acesso a um remoto
- Este projeto está pre configurado para o MongoDB (MONGO_URI)

## Variáveis de ambiente (criar)

### Backend /backend
.env
```bash
API_PORT=4001 
MONGO_URI=mongodb://127.0.0.1:27017/dccord
TOKEN_KEY=<cria_sua_chave>
```

### Frontend /dccord
.env.local
```bash
JWT_SECRET=<cria_sua_chave>
```