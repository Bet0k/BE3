import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'API de Usuarios - Backend III',
    },
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJSDoc(swaggerOptions);

export { swaggerUiExpress, specs };
