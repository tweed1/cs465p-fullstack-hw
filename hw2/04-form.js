//referenced Caterina's video lectures
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.get('/form', (req, res) => {
    res.status(200)
    res.set({'content-type': 'text/html'})
    res.write('<form action="/submit" method="post">')
    res.write('<label for="name">Name: </label>')
    res.write('<input type="text" name="name" id="name"><br />')
    res.write('<label for="email">Email: </label>')
    res.write('<input type="text" name="email" id="email"><br />')
    res.write('<input type="submit" value="submit">')
    res.write('</form></body></html>');
    res.end()
})

app.post('/submit', (req, res) => {
    res.status(200)
    res.set({'content-type': 'text/html'})
    res.write(`<p>Name: ${req.body.name} </p>`)
    res.write(`<p>Email: ${req.body.email} </p>`)
    res.end()
})
// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered
app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});