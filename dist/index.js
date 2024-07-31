"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const burritoRoutes_1 = __importDefault(require("./routes/burritoRoutes"));
const orderRoutes_1 = __importDefault(require("./routes/orderRoutes"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
// Use routes
app.use('/api', burritoRoutes_1.default);
app.use('/api', orderRoutes_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack); // Log error stack to console for debugging
    res.status(err.status || 500).json({
        error: Object.assign({ message: err.message || 'Internal Server Error' }, (process.env.NODE_ENV === 'development' ? { stack: err.stack } : {}) // Include stack trace in development environment
        )
    });
});
// Catch-all route for undefined routes
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Not Found', message: `The route ${req.originalUrl} does not exist.` });
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
