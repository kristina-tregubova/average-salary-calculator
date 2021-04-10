import Router from 'express';
import FormData from '../models/FormData.js';
import CalculationResults from '../models/CalculationResults.js';
import Index from '../models/Index.js';
const router = Router();


router.get('/getCurrentIndex', async (req, res) => {
    try {
        // find existing or create one if none found (first attempt)
        const index = await Index.findOne({}, async (err, doc) => {
            if (!doc) {
                const index = new Index();
                return index;
            }
        });
        return index.customIndex ? index.customIndex : index.defaultIndex;
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

router.put('/setCustomIndex', async (req, res) => {
    try {
        const newIndexValue = req.body;
        const index = await Index.update({}, {customIndex: newIndexValue});
        await index.save();
        return index.customIndex;
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

router.get('/resetCustomIndex', async (req, res) => {
    try {
        await Index.update({}, {customIndex: null});
        return true;
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

router.post('/sendFormData', async (req, res) => {
    try {
        // todo: add logic
        const formData = req.body;
        return {averageMonthlySalary: 170000, annualIncome: 2000000, salaryForGivenMonth: 185000, month: 'Январь'};
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

const calculatorRoutes = router;
export default calculatorRoutes;