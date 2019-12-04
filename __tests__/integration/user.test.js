import request from 'supertest';
import app from '../../src/app';

describe('User', () => {
  it('should be able to register', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        name: 'Gus Prado',
        email: 'gus@gusprado.com',
        password_hash: '123456',
      });

    expect(res.body).toHaveProperty('id');
  });
});
