import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [
    {
        "id": "9c84c05b-dd4e-40ab-836b-f1b64af81438",
        "firstName": "Rowan",
        "lastName": "Atkinson",
        "age": 56
    },
    {
        "id": "2c98733b-b825-4670-ac73-12d20097647d",
        "firstName": "John",
        "lastName": "Doe",
        "age": 34
    }
]

router.get('/', (req, res) => {
    res.status(200).json(users);
});

router.post('/', (req, res) => {
    const user = {
        id: uuidv4(),
        ...req.body
    }
    res.status(200).json(user);
    users.push(user);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const result = users.find((user) => user.id === id);
    if(result == undefined) res.status(404).json({"message": "user not found"})
    res.status(200).json(result);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.status(200).json(users);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    const { firstName, lastName, age } = req.body;
    if(firstName) {
        user.firstName = firstName;
    } 
    if(lastName) {
        user.lastName = lastName;
    } 
    if(age) {
        user.age = age;
    } 
    res.status(200).json(user);
});

export default router;