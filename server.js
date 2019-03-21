const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');

const database = {
	users: [
		{
			id: '123',
			name: 'John',
			email: 'john@gmail.com',
			password: 'cookies',
			entries: 0,
			joined: new Date()
		},
		{
			id: '124',
			name: 'Mary',
			email: 'mary@gmail.com',
			password: 'cakes',
			entries: 0,
			joined: new Date()
		}
	],
	login: [
		{
			id: '987',
			hash:'',
			email:'john@gmail.com'
		}
	]
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', ( req, res )=> {
	res.send(database.users);
})

app.post('/signin', (req, res) => {
    console.log('email', req.body.email);
    console.log('pass', req.body.password);
    if (req.body.email === database.users[0].email &&
		req.body.password === database.users[0].password) {
			res.json('success');
	} else {
		res.status(400).json('error loggoing in');
    }

	// if ( req.body.email === database.users[0].email &&
	// 	 req.body.password === database.users[0].password ){
	// 	res.json('sucess');
	// } else {
	// 	res.status(400).json('error loging in');
	// 	console.log(req.body.email + req.body);
	// }
});

app.post('/register', (req, res) => {
	const { email, name , password } = req.body;
	bcrypt.hash(password, null, null, function(err, hash) {
		console.log(hash);
	});
	database.users.push({
		id:'125',
		name: name,
		email: email,
		password: password,
		entries: 0,
		joined: new Date()
	}) 
	res.json(database.users[database.users.length-1]);
})

app.get('/profile/:id', ( req, res ) => {
	const { id } = req.params;
	let found = false;
	database.users.forEach( user =>{
		if (user.id === id){
			found = true;
			return res.json(user);
		} 
	});
	if (!found) {
		res.status(400).json('not found');
	}
})

app.put('/image', ( req,res ) => {
	const { id } = req.body;
	let found = false;
	database.users.forEach( user=> {
		if (user.id === id){
			found = true;
			user.entries++;
			return res.json(user.entries);
		}
	});
	if(!found) {
		res.status(400).json('not found');
	}
})

app.listen(3000, ()=> {
	console.log('app is running on port 3000');
})

/*
/--> res = this is workinig
/signin --> POST = success/ fail
/register --> POST = return user
/profile/:userId --> GET = user
/image --> PUT (update the rank or other things)--> user
*/