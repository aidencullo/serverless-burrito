import express from 'express';
import burritoRoutes from './routes/burritoRoutes';
import orderRoutes from './routes/orderRoutes';
import { errorHandler, notFoundHandler } from './middleware/errorHandler';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', burritoRoutes);
app.use('/api', orderRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
