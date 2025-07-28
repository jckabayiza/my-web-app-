const request = require('supertest');
const app = require('../app');

describe('GET /api/hello', () => {
  it('responds with JSON message', async () => {
    const response = await request(app)
      .get('/api/hello')
      .expect('Content-Type', /json/)
      .expect(200);
    
    expect(response.body.message).toBe('Hello from CI/CD Pipeline!');
  });
});

describe('GET /health', () => {
  it('responds with status 200', async () => {
    await request(app)
      .get('/health')
      .expect(200);
  });
});
