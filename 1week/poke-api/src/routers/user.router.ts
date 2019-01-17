import express from 'express';
import { User } from '../models/user';

let peter = new User(1,'peter', 'password', 'peter');
let kyle = new User(2, 'kyle', 'password', 'kyle');
const users = [
  peter,
  kyle
]

// we will assume all routes defined with this router
// start with '/users'
export const userRouter = express.Router();

// /users - find all
userRouter.get('', (req, res) => {
  res.json(users);
})

// /users/:id - find by id
userRouter.get('/:id', (req, res) => {
  console.log(req.params);
                                      // +'1' - will convert to number
  const user = users.find(ele => ele.id === +req.params.id);
  res.json(user);
})

userRouter.post('', (req, res) => {
  users.push(req.body);
  res.sendStatus(201);
})
