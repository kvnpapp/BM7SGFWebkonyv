const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit_form', (req, res) => {
    const formData = req.body;
    fs.readFile('submissions.json', 'utf8', (err, data) => {
        if (err) throw err;
        const submissions = JSON.parse(data);
        submissions.push(formData);
        fs.writeFile('submissions.json', JSON.stringify(submissions, null, 2), 'utf8', (err) => {
            if (err) throw err;
            res.send('Adatok sikeresen elmentve!');
        });
    });
});

app.listen(port, () => {
    console.log(`A szerver fut a http://localhost:${port} címen`);
});
