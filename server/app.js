const express = require('express');
const app = express();
const port = 1337;


app.use(express.static('./client/public'));

app.get('/', function (req, res) {
	res.sendFile('feed.html', {root: './client/views' })
})

app.get('/signup', function (req, res) {
	res.sendFile('signup.html', {root: './client/views'})
})

app.get('/login', function (req, res) {
	res.sendFile('login.html', {root: './client/views'})
})

app.listen(port, () => { console.log(`Marist Chatter listening on port ${port}`);
});
//app.listen(1337, () => console.log('Marist Chatter listening on port 1337!'));

/* tells node that anything in the public folder is automatically 
accessible from the site's root path url */
