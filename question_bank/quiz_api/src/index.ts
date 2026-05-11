import express from 'express';
import * as fs from 'fs';
import * as path from 'path'

const app = express();
const port = 3001;
const data = JSON.parse(fs.readFileSync('ccna.json', 'utf-8'));


console.log('Hello, World!');