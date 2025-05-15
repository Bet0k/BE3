🐶 Backend III - Proyecto Final
Este es el proyecto final del curso Backend III, donde se implementan rutas de usuarios y adopciones, con tests funcionales, documentación Swagger y dockerización del entorno.

📦 Requisitos
Node.js 18+

Docker (para entorno dockerizado)

MongoDB Atlas (o local)

🚀 Cómo ejecutar el proyecto localmente

#Clonar el repositorio:
    git clone https://github.com/TU_USUARIO/TU_REPO.git

#Instalar dependencias:
    npm install

#Crear un archivo .env y configurar:
    PORT=3000
    MONGO_URL=tu_mongo_uri

#Iniciar el servidor:
    npm run start



🧪 Tests funcionales
#Para ejecutar los tests funcionales:
    npm run test



📄 Documentación Swagger
#La documentación de la API se encuentra disponible al ejecutar el proyecto en:
    http://localhost:3000/api/docs



🐳 Ejecutar con Docker
#Construir la imagen:
docker build -t tu_usuario/backend3-final .

#Ejecutar el contenedor:
    docker run -p 8080:3000 tu_usuario/backend3-final

Accedé a la app en: http://localhost:8080



☁️ Imagen en Docker Hub
#La imagen del proyecto está disponible públicamente en Docker Hub:

🔗 https://hub.docker.com/r/tu_usuario/backend3-final



🧰 Tecnologías utilizadas
-Node.js
-Express
-MongoDB
-Mongoose
-Docker
-Jest + Supertest
-Swagger