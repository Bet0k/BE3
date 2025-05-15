import request from 'supertest';
import app from '../app.js';
import mongoose from 'mongoose';

beforeAll(async () => {
  await mongoose.connect('mongodb+srv://beto:1234@cluster0.g5rqp.mongodb.net/backend_3');
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Users API', () => {
  let userId;

  test('GET /api/users - debe devolver un array de usuarios', async () => {
    const res = await request(app).get('/api/users');
    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.users)).toBe(true);
  });

  test('POST /api/users - debe crear un usuario nuevo', async () => {
    const newUser = {
      username: 'testuser',
      password: '123456',
      role: 'user'
    };
    const res = await request(app).post('/api/users').send(newUser);
    expect(res.statusCode).toBe(201);
    expect(res.body.user).toHaveProperty('_id');
    expect(res.body.user.username).toBe(newUser.username);
    userId = res.body.user._id;
  });

  test('GET /api/users/:uid - debe devolver un usuario por ID', async () => {
    const res = await request(app).get(`/api/users/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.user).toHaveProperty('_id', userId);
  });

  test('PUT /api/users/:uid - debe actualizar un usuario', async () => {
    const updatedData = { username: 'updatedUser' };
    const res = await request(app).put(`/api/users/${userId}`).send(updatedData);
    expect(res.statusCode).toBe(200);
    expect(res.body.user.username).toBe(updatedData.username);
  });

  test('DELETE /api/users/:uid - debe eliminar un usuario', async () => {
    const res = await request(app).delete(`/api/users/${userId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message');
  });

  test('GET /api/users/:uid - debe devolver 404 para usuario eliminado', async () => {
    const res = await request(app).get(`/api/users/${userId}`);
    expect(res.statusCode).toBe(404);
  });
});
