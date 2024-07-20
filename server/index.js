import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import axios from 'axios';

const PORT = 4008;
const app = express();
const openai = new OpenAI({ apiKey: `${process.env.OPENAI_API_KEY}` });

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: 'You are a helpful assistant.'
                    },
                    {
                        role: 'user',
                        content: message
                    }
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        res.json(response.data.choices[0].message);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error calling OpenAI API');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});