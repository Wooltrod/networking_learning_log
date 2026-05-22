import express from 'express';
import * as fs from 'fs';
import * as path from 'path';

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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// FIX 1: Single root endpoint managing overall lists & optional query filters
// URL Examples: 
// - Get everything:  http://localhost:3001/api/questions
// - Filter by day:   http://localhost:3001/api/questions?day_number=16
app.get('/api/questions', (req, res) => {
    const { day_number, tags } = req.query;

    if (day_number) {
    const filtered = data.filter((item) => item.day_number === String(day_number));
    console.log(`Filtered questions for day ${day_number}`);
    return res.json(filtered); 
    }

    if (tags) {
        const tagsArray = String(tags).split(',').map(tag => tag.trim());
        const filtered = data.filter((item) => item.tags.some(tag => tagsArray.includes(tag)));
        console.log(`Filtered questions for tags: ${tagsArray.join(', ')}`);
        return res.json(filtered); 
    }
    res.json(data);
});


// FIX 2: Explicit unique path for fetching by the "number" field
// URL Example: http://localhost:3001/api/questions/866
app.get('/api/questions/:number', (req, res) => {
    const { number } = req.params;
    const matchedQuestions = data.filter((item) => item.number === Number(number));
    
    // FIX 3: Array.filter() always returns an array, check length instead of !question
    if (matchedQuestions.length === 0) {
        return res.status(404).json({ error: `Question number ${number} not found` });
    }
    
    res.json(matchedQuestions);
});
