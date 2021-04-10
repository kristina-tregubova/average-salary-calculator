import { Schema, model } from 'mongoose';

const schema = new Schema({
    averageMonthlySalary: {type: Number},
    annualIncome: {type: Number},
    salaryForGivenMonth: {type: Number},
    month: {type: String}
});

export const FormData = model('CalculationResults', schema);