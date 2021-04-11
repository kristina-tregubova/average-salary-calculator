export default class Calculator {
    index = 13;
    salary = 180000;
    tax = 0.01; // 1%
    bonus = 0.02; // 2%
    constructor() {}

    calculateAverageMonthlySalary() {
        const res = this.salary - (this.salary * this.index * this.tax);
        const bonusRes = (this.salary * 3) + (this.salary * this.index * this.bonus);
    }
    calculateAnnualIncome() {}
    calculateSalaryForGivenMonth() {}

}