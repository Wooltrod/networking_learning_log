import express from 'express';
import * as fs from 'fs';
import * as path from 'path'

interface Questions {
    id: string;
    deck: string;
    deck_tag: string;
    question: string;
    answer: string[];
    straight_forward: boolean;
    day_number: string;
    multiple_ans: boolean;
    alligned: boolean;
    tags: string[];
    number: number;
}

const app = express();
const port = 3001;
const data: Questions[] = JSON.parse(fs.readFileSync('ccna.json', 'utf-8'));

// const config_questions = data.filter((item) => item.number == 200);

// console.log(config_questions);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/api/all', (req, res) => {
    res.json(data);
});

app.get('/api/:number', (req, res) => {
    const { number } = req.params;
    const question = data.filter((item) => item.number === Number(number));
    if (!question) {
        return res.status(404).json({ error: 'Question not found' });
    }
    res.json(question);
});

app.get('/api/day_number/:day_number', (req, res) => {
    const { day_number } = req.params;
    const question = data.filter((item) => item.day_number === day_number);
    if (!question) {
        return res.status(404).json({ error: 'Question not found' });
    }
    res.json(question);
});