import express from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log(`app listening to port: ${PORT}`);
});


app.get('/', (req, res) => {
    res.status(404).json({status: 'success'})
})