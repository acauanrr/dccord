# Projeto Web Chat da Disciplina - DCC704 - UFRR
### Nextjs - Nodejs - MongoDB e WebSockets

## Pré-requisitos
- Necessário ter acesso a um servidor de Banco de Dados, o projeto está precondigurado para **MongoDB** (local ou cloud)
- Node.js instalado em sua versão atualizada LTS

## Passo a passo (para linux)
1. git clone https://github.com/acauanrr/dccord.git
2. cd dccord/
  ### /backend
3. cd backend/
4. touch .env
5. Após criar o arquivo *.env*, cole as variáveis de ambiente fazendo as alterações necessárias:
```bash
API_PORT=4001
MONGO_URI=mongodb://127.0.0.1:27017/dccord
TOKEN_KEY=''  
MONGO_CLOUD_URI=''
```
>Pode-se gerar o **TOKEN_KEY** por <https://emn178.github.io/online-tools/sha256.html>
>e configurar o banco de dados de maneira remota para obert o **MONGO_CLOUD_URI** em <https://cloud.mongodb.com/>
6. npm i
7. npm run dev

 ### /frontend
8. cd .. *(volte para dccord/ )*
9. cd frontend/ 
10. As variáveis de ambiente nesta versão do *Nextjs* ficam no arquivo
```bash
next.config.js
```
11. Faça as adequações que achar necessárias.
12. npm i
13. npm run dev
14. Acesse localhost:3000

