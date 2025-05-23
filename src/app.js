import express from 'express';
import mongoose from 'mongoose';
import mocksRouter from './routes/mocks.router.js';
import usersRouter from './routes/users.router.js';
import { swaggerUiExpress, specs } from './docs/swaggerConfig.js';

const app = express();

app.use(express.json());
app.use('/api/mocks', mocksRouter);
app.use('/api/users', usersRouter);
app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(specs));

export default app;

if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  mongoose.connect('mongodb+srv://beto:1234@cluster0.g5rqp.mongodb.net/backend_3')
    .then(() => {
      console.log('Conectado a MongoDB');
      app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
    })
    .catch(err => console.error('Error conectando a MongoDB:', err));
}
