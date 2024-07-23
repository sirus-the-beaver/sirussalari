import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import processQuery from './services/chatbot.js';

const PORT = 4037;
const corsOptions = {
    origin: 'http://localhost:5177',
}
const app = express();

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

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