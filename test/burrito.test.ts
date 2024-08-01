import request from 'supertest';
import { app, server } from '../src/index';
import { Burrito } from '../src/models/burrito';
import { Topping } from '../src/models/topping';

afterAll((done) => {
    server.close(done);
});

describe('Burrito Controller - Endpoints', () => {
    it('should return an empty array from /api/burrito endpoint with status 200', async () => {
        const burritos: any[] = [];

        const response = await request(app).get('/api/burrito');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(burritos);
    });

    it('should create a new burrito and return it with status 201', async () => {
        const newBurrito = { name: 'Chicken Burrito', size: 'Large', price: 9.99 };
        const response = await request(app)
            .post('/api/burrito')
            .send(newBurrito);

        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject(newBurrito);
        expect(response.body.id).toBeDefined();
    });

    it('should return a burrito by ID with status 200', async () => {
        const newBurrito = { name: 'Beef Burrito', size: 'Medium', price: 7.99 };
        const createResponse = await request(app)
            .post('/api/burrito')
            .send(newBurrito);

        const burritoId = createResponse.body.id;
        const response = await request(app).get(`/api/burrito/${burritoId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(newBurrito);
    });

    it('should return 404 if burrito not found', async () => {
        const response = await request(app).get('/api/burrito/999');
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: 'Burrito not found' });
    });

    it('should update a burrito and return it with status 200', async () => {
        const newBurrito = { name: 'Veggie Burrito', size: 'Small', price: 5.99 };
        const createResponse = await request(app)
            .post('/api/burrito')
            .send(newBurrito);

        const burritoId = createResponse.body.id;
        const updatedBurrito = { name: 'Veggie Burrito', size: 'Large', price: 7.99 };
        const response = await request(app)
            .put(`/api/burrito/${burritoId}`)
            .send(updatedBurrito);

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(updatedBurrito);
    });

    it('should return 404 if updating a non-existent burrito', async () => {
        const updatedBurrito = { name: 'Fish Burrito', size: 'Large', price: 8.99 };
        const response = await request(app)
            .put('/api/burrito/999')
            .send(updatedBurrito);

        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: 'Burrito not found' });
    });

    it('should delete a burrito and return status 204', async () => {
        const newBurrito = { name: 'Pork Burrito', size: 'Medium', price: 6.99 };
        const createResponse = await request(app)
            .post('/api/burrito')
            .send(newBurrito);

        const burritoId = createResponse.body.id;
        const response = await request(app).delete(`/api/burrito/${burritoId}`);

        expect(response.statusCode).toBe(204);
    });

    it('should return 404 if deleting a non-existent burrito', async () => {
        const response = await request(app).delete('/api/burrito/999');
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: 'Burrito not found' });
    });
});
