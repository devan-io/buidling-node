import express from 'express';

const router = express.Router();

const users = [
	{
		firstname: "John",
		lastname: "Doe",
		age: 30
	}
];

//All routes in here are starting with /users
router.get('/', (req, res) => {
	console.log(users);
	res.send(users);
});

export default router;