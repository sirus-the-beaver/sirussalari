import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import processQuery from './services/chatbot.js';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

const PORT = process.env.SERVER_PORT;
const corsOptions = {
    origin: function (origin, callback) {
        const whiteList = ['http://localhost:5173'];
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

app.post('/api/chat', async (req, res) => {
    const { query} = req.body;

    if (!query) {
        return res.status(400).json({ message: 'Query is required.' });
    }

    const response = await processQuery(query);
    res.send({ response });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});