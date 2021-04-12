const BONUS_MONTHS = ["Март", "Июнь", "Сентябрь", "Декабрь"];
const MONTHS = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
];

export const calculator = {

    async getCalculationResults(formData, indices) {
        this.formData = formData;
        this.indices = indices;
        this.calculationResults = {};

        if (!this.formData.month) {
            this.calculationResults.annualIncome = this.calculateAnnualIncome();
            this.calculationResults.averageMonthlySalary = this.calculateAverageMonthlySalary(this.calculationResults.annualIncome);
        } else {
            this.calculationResults.salaryForGivenMonth = await this.calculateSalaryForGivenMonth();
            this.calculationResults.month = this.formData.month;
        }
        return this.calculationResults;
    },

    calculateAverageMonthlySalary(annualIncome) {
        return Math.round(annualIncome / 12);
    },

    calculateAnnualIncome() {
        const bonus = this.calculateBonus();
        const numberOfMonths = this.getNumberOfMonths();
        const grossAnnualIncome = this.formData.grossMonthlySalary * numberOfMonths + bonus * BONUS_MONTHS.length;
        return this.getNetSalary(grossAnnualIncome);
    },

    calculateSalaryForGivenMonth() {
        let result = 0;
        if (BONUS_MONTHS.includes(this.formData.month)) {
            result += +this.calculateBonus();

            if (this.formData.month === MONTHS[MONTHS.length - 1] && this.formData.isThirteensSalaryChecked) {
                result += +this.formData.grossMonthlySalary;
            }
        }
        result += +this.formData.grossMonthlySalary;
        return this.getNetSalary(result);
    },

    calculateBonus() {
        const grossSalary = this.formData.grossMonthlySalary;
        if (grossSalary < this.indices.x4) {
            return this.getXBonusValue(this.indices.x5, grossSalary);
        }
        return this.getXBonusValue(this.indices.x2, grossSalary) + this.indices.x3;
    },

    getNetSalary(grossSalary) {
        return Math.round(grossSalary * (1 - (this.indices.x1 * 0.01)));
    },

    getXBonusValue(index, grossSalary) {
        return grossSalary * (index * 0.01);
    },

    // indicates whether 13th salary is to be taken into account for calculations
    getNumberOfMonths() {
        return this.formData.isThirteensSalaryChecked ? MONTHS.length + 1 : MONTHS.length;
    }
}