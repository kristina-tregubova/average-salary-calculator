import { Schema, model } from 'mongoose';

const schema = new Schema({
    grossMonthlySalary: {type: Number, required: true},
    month: {type: String, required: true},
    isThirteensSalaryChecked: {type: Boolean} 
});

export const FormData = model('FormData', schema);