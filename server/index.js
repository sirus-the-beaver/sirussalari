import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import processQuery from './services/chatbot.js';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import { body, validationResult } from 'express-validator';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.SERVER_PORT || 5000;
const corsOptions = {
    origin: function (origin, callback) {
        const whiteList = ['https://sirussalari.com', 'https://www.sirussalari.com'];
        if (!origin || whiteList.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['POST']
}

const app = express();

dotenv.config();
app.use(helmet());
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again after 15 minutes.'
});

app.use(limiter);

app.post('/api/chat', 
    body('query').isString().notEmpty().withMessage('Query is required.'),
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { query} = req.body;

        try {
            const response = await processQuery(query);
            res.send({ response });
        } catch (error) {
            res.status(500).send({ error: error.message });
        }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});