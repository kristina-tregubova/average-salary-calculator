import pkg from 'mongoose';
const { Schema, model } = pkg;

const schema = new Schema({
    x1: {
        type: Number,
        default: 2,
        trim: true
    },
    x2: {
        type: Number,
        default: 2,
        trim: true,
    },
    x3: {
        type: Number,
        default: 2,
        trim: true
    },
    x4: {
        type: Number,
        default: 2,
        trim: true
    },
    x5: {
        type: Number,
        default: 2,
        trim: true
    },
});

const Indices = model('Indices', schema);
export default Indices;