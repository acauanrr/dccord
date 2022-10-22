# Projeto Web Chat da Disciplina - DCC704 - UFRR
### Nextjs - Nodejs - MongoDB e WebSockets

## Banco de Dados
- Necessário ter acesso a um servidor de Banco de Dados (local ou remoto)
- Este projeto está pre configurado para o **MongoDB** (MONGO_URI OU MONGO_CLOUD_URI)

## Criar arquivos de variáveis de ambiente

### /backend
*.env*
```bash
API_PORT=4001
MONGO_URI=mongodb://127.0.0.1:27017/dccord
TOKEN_KEY=<token-gerada-com-SHA256>  (https://emn178.github.io/online-tools/sha256.html)
MONGO_CLOUD_URI=<mongo_cloud_uri> (https://cloud.mongodb.com/)
```

### /frontend
*.env.local*
```bash
JWT_SECRET=<your_key>
```