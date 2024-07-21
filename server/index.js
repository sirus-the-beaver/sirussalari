import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import dotenv from 'dotenv';

const PORT = 4008;
const corsOptions = {
    origin: 'http://localhost:5173',
}
const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors(corsOptions));
app.use(express.json());

app.post('/api/chat', async (req, res) => {
    const completion = await openai.completions.create({
        model: "ft:davinci-002:personal:skills:9nE2B8s2",
        prompt: req.body.message
    });

    res.json({ message: completion.choices[0].text });

    console.log(req.body.message);
    console.log(completion.choices[0].text);

});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});