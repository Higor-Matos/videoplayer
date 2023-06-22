# Vamos usar uma imagem base com Node.js instalado
FROM node:16-alpine

# Definir diretório de trabalho no container
WORKDIR /app

# Copiar package.json e package-lock.json antes de outros arquivos para aproveitar o cache do Docker
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expõe a porta 5173 do container
EXPOSE 5173

# Comando para iniciar a aplicação
CMD [ "npm", "run", "dev" ]
