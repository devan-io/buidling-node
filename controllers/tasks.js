let todos = [];

export const getTodos = (req, res) => {
	res.send(todos);
};

export const createTodo = (req, res) => {
	const todo = req.body;
	
	todos.push(todo);
	res.send(`User has added ${todo.taskName} to the database!`);
};

export const getTodo =  (req, res) => {
	const { id } = req.params;
	const foundTodos = todos.find((todo => todo.id === id));

	res.send(foundTodos);
};

export const deleteTodo =  (req, res) => {
	const { id } = req.params;
	
	todos = todos.filter((todo) => todo.id !== id);
	res.send(`Task with the id ${id} has been deleted from the database!`);
};

export const updateTodo =  (req, res) => {
	const { id1 } = req.params;
	const { id, taskName, description } = req.body;

	const todo = todos.find((todo) => todo.id === id1);
	if(id) todo.id = id;
	if(taskName) todo.taskName = taskName;
	if(description) todo.description = description;
	res.send(`Task with the id ${id} has been updated!`);
};