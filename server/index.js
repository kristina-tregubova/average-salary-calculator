import express from 'express';
import  mongoose from 'mongoose';
import calculatorRoutes from './routes/calculator';

const PORT = 3000;
const app = express();

app.use(calculatorRoutes);

async function start() {
    try{
        await mongoose.connect('mongodb+srv://kristina:12345@cluster0.4atel.mongodb.net/app', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log(`Server hass been started on port ${PORT}...`);
        });
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}

start();