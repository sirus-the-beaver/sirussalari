import express from 'express';
import db from '../db/connection.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

router.get('/', async (req, res) => {
    let collection = await db.collection('records');
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.get('/:id', async (req, res) => {
    let collection = await db.collection('records');
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) res.send('Record not found').status(404);
    else res.send(result).status(200);
});

router.delete('/:id', async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const collection = await db.collection('records');
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (error) {
        console.error('Error deleting record:', error);
        res.status(500).send('Error deleting record');
    }
});

export default router;