import { Schema, model } from 'mongoose';

const schema = new Schema({
    defaultIndex: {
        type: Number,
        default: 2,
        immutable: true
    },
    customIndex: {
        type: Number,
        trim: true,
        required: 'Необходимо передать значение кэффициента',
        validate: [validateLocalStrategyProperty, 'Некорректный формат коэффициента']
    }
});

export const FormData = model('Index', schema);