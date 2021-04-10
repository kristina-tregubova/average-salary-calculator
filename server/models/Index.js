import pkg from 'mongoose';
const { Schema, model } = pkg;

const schema = new Schema({
    defaultIndex: {
        type: Number,
        default: 2,
        immutable: true
    },
    customIndex: {
        type: Number,
        trim: true,
        required: 'Необходимо передать значение кэффициента'
    }
});

const Index = model('Index', schema);
export default Index;