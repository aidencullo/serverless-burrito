import request from 'supertest';
import { app, server } from '../src/index';
import { Item } from '../src/models/item';
import { Burrito } from '../src/models/burrito';
import { Topping } from '../src/models/topping';

afterAll((done) => {
    server.close(done);
});

describe('Order Controller - Endpoints', () => {
    it('should return an empty array from /api/orders endpoint with status 200', async () => {
        const response = await request(app).get('/api/orders');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([]);
    });

    it('should submit a new order with toppings and return it with status 201', async () => {
        const newOrder = {
            items: [
                {
                    burrito: {
                        id: 1,
                        name: 'Chicken Burrito',
                        size: 'Large',
                        price: 9.99,
                        toppings: [
                            { name: 'Black Olives' },
                            { name: 'Rice' }
                        ] // Example toppings
                    } as Burrito,
                    quantity: 2
                } as Item
            ],
            totalCost: 19.98
        };
        const response = await request(app)
            .post('/api/orders')
            .send(newOrder);

        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject(newOrder);
        expect(response.body.id).toBeDefined();
    });

    it('should return an order by ID with toppings and status 200', async () => {
        const newOrder = {
            items: [
                {
                    burrito: {
                        id: 2,
                        name: 'Beef Burrito',
                        size: 'Medium',
                        price: 7.99,
                        toppings: [
                            { name: 'Sour Cream' }
                        ] // Example topping
                    } as Burrito,
                    quantity: 1
                } as Item
            ],
            totalCost: 7.99
        };
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

    it('should update an order with new toppings and return it with status 200', async () => {
        const newOrder = {
            items: [
                {
                    burrito: {
                        id: 3,
                        name: 'Veggie Burrito',
                        size: 'Small',
                        price: 5.99,
                        toppings: [
                            { name: 'Black Olives' },
                            { name: 'Rice' }
                        ] // Example toppings
                    } as Burrito,
                    quantity: 3
                } as Item
            ],
            totalCost: 17.97
        };
        const createResponse = await request(app)
            .post('/api/orders')
            .send(newOrder);

        const orderId = createResponse.body.id;
        const updatedOrder = {
            items: [
                {
                    burrito: {
                        id: 3,
                        name: 'Veggie Burrito',
                        size: 'Small',
                        price: 5.99,
                        toppings: [
                            { name: 'Black Olives' },
                            { name: 'Sour Cream' } // Updated topping
                        ] // Example updated toppings
                    } as Burrito,
                    quantity: 4
                } as Item
            ],
            totalCost: 23.96
        };
        const response = await request(app)
            .put(`/api/orders/${orderId}`)
            .send(updatedOrder);

        expect(response.statusCode).toBe(200);
        expect(response.body).toMatchObject(updatedOrder);
    });

    it('should return 404 if updating a non-existent order', async () => {
        const updatedOrder = {
            items: [
                {
                    burrito: {
                        id: 4,
                        name: 'Fish Burrito',
                        size: 'Large',
                        price: 8.99,
                        toppings: [
                            { name: 'Rice' }
                        ] // Example topping
                    } as Burrito,
                    quantity: 2
                } as Item
            ],
            totalCost: 15.98
        };
        const response = await request(app)
            .put('/api/orders/999')
            .send(updatedOrder);

        expect(response.statusCode).toBe(404);
        expect(response.body).toEqual({ error: 'Order not found' });
    });

    it('should delete an order and return status 204', async () => {
        const newOrder = {
            items: [
                {
                    burrito: {
                        id: 5,
                        name: 'Pork Burrito',
                        size: 'Medium',
                        price: 6.99,
                        toppings: [
                            { name: 'Sour Cream' }
                        ] // Example topping
                    } as Burrito,
                    quantity: 1
                } as Item
            ],
            totalCost: 6.99
        };
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
