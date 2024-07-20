import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

const PORT = 4003;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
            prompt: message,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        res.json(response.data)
    } catch (error) {
        console.error(error);
        res.status(500).send('Error calling OpenAI API');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});