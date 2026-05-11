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
const questions = require('..ccna.json') as Questions[];


console.log('Hello, World!');