import request from 'supertest';
import { app, server } from '../src/index';

afterAll((done) => {
    server.close(done);
});

describe('Order Controller - Endpoints', () => {
    it('should return an empty array from /api/orders endpoint with status 200', async () => {
        const response = await request(app).get('/api/orders');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });

    it('should submit a new order and return it with status 201', async () => {
        const newOrder = { items: [{ name: 'Chicken Burrito', quantity: 2 }], totalCost: 19.98 };
        const response = await request(app)
            .post('/api/orders')
            .send(newOrder);

        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject(newOrder);
        expect(response.body.id).toBeDefined();
    });

    it('should return an order by ID with status 200', async () => {
        const newOrder = { items: [{ name: 'Beef Burrito', quantity: 1 }], totalCost: 7.99 };
        const createResponse = await request(app)
            .post('/api/orders')
            .send(newOrder);

        const orderId = createResponse.body.id;
        const response = await request(app).get(`/api/orders/${orderId}`);

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(newOrder);
    });

    it('should return 404 if order not found', async () => {
        const response = await request(app).get('/api/orders/999');
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: 'Order not found' });
    });

    it('should update an order and return it with status 200', async () => {
        const newOrder = { items: [{ name: 'Veggie Burrito', quantity: 3 }], totalCost: 17.97 };
        const createResponse = await request(app)
            .post('/api/orders')
            .send(newOrder);

        const orderId = createResponse.body.id;
        const updatedOrder = { items: [{ name: 'Veggie Burrito', quantity: 4 }], totalCost: 23.96 };
        const response = await request(app)
            .put(`/api/orders/${orderId}`)
            .send(updatedOrder);

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(updatedOrder);
    });

    it('should return 404 if updating a non-existent order', async () => {
        const updatedOrder = { items: [{ name: 'Fish Burrito', quantity: 2 }], totalCost: 15.98 };
        const response = await request(app)
            .put('/api/orders/999')
            .send(updatedOrder);

        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: 'Order not found' });
    });

    it('should delete an order and return status 204', async () => {
        const newOrder = { items: [{ name: 'Pork Burrito', quantity: 1 }], totalCost: 6.99 };
        const createResponse = await request(app)
            .post('/api/orders')
            .send(newOrder);

        const orderId = createResponse.body.id;
        const response = await request(app).delete(`/api/orders/${orderId}`);

        expect(response.statusCode).toBe(204);
    });

    it('should return 404 if deleting a non-existent order', async () => {
        const response = await request(app).delete('/api/orders/999');
        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: 'Order not found' });
    });
});
