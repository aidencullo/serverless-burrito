import request from 'supertest';
import { app, server } from '../src/index';

afterAll((done) => {
    server.close(done);
});

describe('Burrito Controller - Endpoints', () => {
    it('should return an empty array from /api/burritos endpoint with status 200', async () => {
        const response = await request(app).get('/api/burrito');

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });
});
