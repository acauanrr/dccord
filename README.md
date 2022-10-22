# Projeto Web Chat da Disciplina - DCC704 - UFRR

### Frameworks utilizados:

|                                                                    Frontend                                                                    |                                                                      Backend                                                                       |                                                                    Banco de Dados                                                                    |
| :--------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://nextjs.org/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" width="64" /></a> | <a href="https://nodejs.org/en/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" width="64" /></a> | <a href="https://www.mongodb.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" width="92" /></a> |

## Pré-requisitos

- Ter acesso a um servidor de **Banco de Dados**. O projeto está configurado para **MongoDB** (local ou cloud)
- **Node.js** instalado em sua versão mais recente LTS.

## Passo a passo (para linux)

```bash
git clone https://github.com/acauanrr/dccord.git
cd dccord/
```

1. Crie as variáveis de ambiente no **/backend**:

```bash
cd backend/
touch .env
```

2. Após criar o arquivo _.env_, copie e cole as variáveis seguintes fazendo as alterações necessárias:

```bash
API_PORT=4001
MONGO_URI=mongodb://127.0.0.1:27017/dccord
TOKEN_KEY=''
MONGO_CLOUD_URI=''
```

> Pode-se gerar o **TOKEN_KEY** em: <https://emn178.github.io/online-tools/sha256.html>,
> e configurar o banco de dados de maneira remota para obter o **MONGO_CLOUD_URI** em: <https://cloud.mongodb.com/>.

3. Na pasta /backend, instale as dependências e suba o serviço:

```bash
npm i
npm run dev
```

4. Configurando o **frontend**, retorne um nível e entre na pasta do frontend/:

```bash
cd ..
cd frontend/
```

5.  As variáveis de ambiente nesta versão do **Nextjs** ficam no arquivo:

```bash
next.config.js
```

6. Instale as dependências e suba o front:

```bash
npm i
npm run dev
```

7.  Abra o navegador e acesse o sistema:

```bash
http://localhost:3000/
```
