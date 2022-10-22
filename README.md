# Projeto Web Chat da Disciplina - DCC704 - UFRR
### Nextjs - Nodejs - MongoDB e WebSockets

## Pré-requisitos
- Necessário ter acesso a um servidor de Banco de Dados, o projeto está precondigurado para **MongoDB** (local ou cloud)
- Node.js instalado em sua versão atualizada LTS

## Passo a passo (para linux)
1. git clone https://github.com/acauanrr/dccord.git
2. code dccord/
   ### /backend
3. cd backend/
4. touch .env
5. Após criar o arquivo *.env*, cole as variáveis de ambiente fazendo as alterações necessárias:
```bash
API_PORT=4001
MONGO_URI=mongodb://127.0.0.1:27017/dccord
TOKEN_KEY=<token-gerada-com-SHA256>  
MONGO_CLOUD_URI=<mongo_cloud_uri>
```
>Pode-se gerar o token por <https://emn178.github.io/online-tools/sha256.html>
>e configurar o banco de dados de maneira remota para obert o _MONGO_CLOUD_URI em <https://cloud.mongodb.com/>

### /frontend
6. *As variáveis de ambiente nesta versão do Nextjs ficam no arquivo*
```bash
next.config.js
```
7. Faça as adequações que achar necessárias