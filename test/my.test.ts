import request from 'supertest';
import express from 'express';
import { getBurritos } from '../src/controllers/burritoController'; // Adjust import path

// Create an Express app instance
const app = express();
app.use(express.json());
app.get('/api/burritos', getBurritos);

describe('Burrito Controller - getBurritos', () => {
    it('should return all burritos with status 200', async () => {
        const response = await request(app).get('/api/burritos');

        // Check the response status code
        expect(response.status).toBe(200);

        // Check the response body content
        expect(response.body).toEqual([]);
    });
});
