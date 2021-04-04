import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRouter from './routes/posts.js';

dotenv.config();

const app = express();




app.use(bodyParser.json({ limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send( 'Hello to Memories API');
});

app.use('/posts', postRouter);
//connect to db
const PORT = process.env.PORT || 5000;
mongoose.connect(
    process.env.CONNECTION_URL,
    {useNewUrlParser: true,
    useUnifiedTopology: true}
)
.then(() => app.listen(PORT,
     ()=> console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);