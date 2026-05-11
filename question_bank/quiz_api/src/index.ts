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

const config_questions = data.filter((item) => item.number == 200);

console.log(config_questions);