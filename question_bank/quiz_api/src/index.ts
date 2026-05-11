import express from 'express';
import * as fs from 'fs';
import * as path from 'path'



const app = express();
const port = 3001;
const data: Questions[] = JSON.parse(fs.readFileSync('ccna.json', 'utf-8'));

const config_questions = data.filter((item) => item.number == 200);

console.log(config_questions);