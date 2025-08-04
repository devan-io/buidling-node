import express from 'express';
import { getTodos, createTodo, getTodo, deleteTodo, updateTodo } from '../controllers/tasks.js';

const router = express.Router();

//All routes in here are starting with /users
router.get('/', getTodos);

router.post('/', createTodo);

router.get('/:id', getTodo);

router.delete('/:id', deleteTodo);

router.patch('/:id', updateTodo);

export default router;