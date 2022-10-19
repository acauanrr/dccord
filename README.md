# Projeto Web Chat da Disciplina - DCC704 - UFRR
## Nextjs - Nodejs - MongoDB e WebSockets

## Banco de Dados
- Necessário ter acesso a um servidor de Banco de Dados (local ou remoto)
- Este projeto está pre configurado para o MongoDB (MONGO_URI)

## Criar arquivos de Variaveis de Ambiente

### /backend
.env
```bash
API_PORT=4001 
MONGO_URI=mongodb://127.0.0.1:27017/dccord
TOKEN_KEY=<your_key>
```

### /frontend
.env.local
```bash
JWT_SECRET=<your_key>
```