# Projeto Web Chat da Disciplina - DCC704 - UFRR
## Nextjs - Nodejs - MongoDB e WebSockets

## Banco de Dados
- Necessário ter acesso a um servidor de Banco de Dados (local ou remoto)
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