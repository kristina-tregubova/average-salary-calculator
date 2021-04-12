import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/default.js';
import calculatorRoutes from './routes/calculatorRoutes.js';

const PORT = config.port;
const app = express();

app.use(express.static("client/dist"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(calculatorRoutes);

async function start() {
    try {
        await mongoose.connect(config.mongoUri, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}...`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

start();