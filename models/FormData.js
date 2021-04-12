import pkg from 'mongoose';
const { Schema, model } = pkg;

const schema = new Schema({
    grossMonthlySalary: {type: Number, required: true},
    month: {type: String, required: true},
    isThirteensSalaryChecked: {type: Boolean} 
});

const FormData = model('FormData', schema);
export default FormData;