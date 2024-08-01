import express from 'express';
import burritoRoutes from './routes/burritoRoutes';
import orderRoutes from './routes/orderRoutes';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';
import { verifyToken } from './middleware/verifyToken';

const app = express();

app.use(express.json());

app.use(verifyToken);

app.use('/api', burritoRoutes);
app.use('/api', orderRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export { app, server };

