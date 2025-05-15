# 1. Imagen base: node en versión ligera (alpine)
FROM node:18-alpine

# 2. Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiar package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# 4. Instalar dependencias
RUN npm install

# 5. Copiar todo el código al contenedor
COPY . .

# 6. Exponer puerto que usa la app (ajustar si usas otro puerto)
EXPOSE 3000

# 7. Comando para iniciar la app
CMD ["node", "src/app.js"]
