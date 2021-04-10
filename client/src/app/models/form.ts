export interface CalculationResults {
    averageMonthlySalary: number;
    annualIncome: number;
    salaryForGivenMonth: number;
    month: string;
}

export enum FormType {
    AverageMonthlySalary = 'average',
    SalaryForGivenMonth = 'month'
}