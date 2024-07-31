import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// Serve the HTML form
app.get('/', (req, res) => {
    res.render("./public/index.ejs");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/test2.html');
})

// Handle form submission
app.post('/login', (req, res) => {
    const street = req.body.street;
    const password = req.body.password;
    res.send(`Form submitted successfully : Street: ${street}, Password: ${password}`);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
