import express from 'express';
import  mongoose from 'mongoose';

const PORT = 3000;
const app = express();

async function start() {
    try{
        await mongoose.connect('mongodb+srv://kristina:12345@cluster0.4atel.mongodb.net/calculator', {
            useNewUrlParser: true,
            useFindAndModify: false
        });
        app.listen(PORT, () => {
            console.log(`Server hass been started on port ${PORT}...`);
        });
    } catch (e) {
        console.error(e);
    }
}

start();