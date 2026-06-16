import express from 'express';
import fs from 'fs/promises';

const app = express();

async function readData(path) {
    try {
        const data = await fs.readFile(path, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

app.get('/', (req, res) => {
    res.send('welcome to courses api');
});

app.get('/courses', async (req, res) => {
    const data = await readData('courses.json');
    res.json(data);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});