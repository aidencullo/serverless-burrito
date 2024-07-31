import express, { Request, Response, NextFunction } from 'express';
import burritoRoutes from './routes/burritoRoutes';
import orderRoutes from './routes/orderRoutes';

const app = express();
const port = 3000;

app.use(express.json());

// Use routes
app.use('/api', burritoRoutes);
app.use('/api', orderRoutes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Log error stack to console for debugging

    res.status(err.status || 500).json({
        error: {
            message: err.message || 'Internal Server Error',
            ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {}) // Include stack trace in development environment
        }
    });
});

// Catch-all route for undefined routes
app.use('*', (req: Request, res: Response) => {
    res.status(404).json({ error: 'Not Found', message: `The route ${req.method} ${req.originalUrl} does not exist` });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
