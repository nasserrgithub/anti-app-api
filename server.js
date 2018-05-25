const express = require('express');
const bodyParser = require('body-parser');
const knex = require('knex');
const cors = require('cors');

const app = express();
const db = knex ({
	client: 'pg',
	connection: {
		connectionString: process.env.DATABASE_URL,
		ssl: true
})

app.use(bodyParser.json());
app.use(cors());


//controllers
app.get('/', (req,res) => {
	res.send('Back-end is working!')
})



app.listen(process.env.PORT || 3000, () => {
	console.log(`App is runnin on port ${process.env.PORT}`)
});