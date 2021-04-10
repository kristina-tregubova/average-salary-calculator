import pkg from 'mongoose';
const { Schema, model } = pkg;

const schema = new Schema({
    averageMonthlySalary: {type: Number},
    annualIncome: {type: Number},
    salaryForGivenMonth: {type: Number},
    month: {type: String}
});

const CalculatorRoutes = model('CalculationResults', schema);
export default CalculatorRoutes;