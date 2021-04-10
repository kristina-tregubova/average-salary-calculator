import Router from 'express';
import FormData from '../models/FormData.js';
import CalculationResults from '../models/CalculationResults.js';
import Index from '../models/Index.js';
const router = Router();

router.get('/getCurrentIndex', async (req, res, next) => {
    try {
        // find existing or create one if none found (first attempt)
        const index = await Index.findOneAndUpdate({}, {}, { upsert: true, new: true, setDefaultsOnInsert: true });
        res.status(200).json(index.customIndex ? index.customIndex : index.defaultIndex);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

router.put('/setCustomIndex', async (req, res, next) => {
    try {
        const newIndexValue = parseInt(req.body.index);
        await Index.updateOne({}, { customIndex: newIndexValue });
        res.status(200).json(newIndexValue);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

// resets custom and returns default
router.get('/resetCustomIndex', async (req, res, next) => {
    try {
        const index = await Index.findOneAndUpdate({}, { customIndex: null });
        res.status(200).json(index.defaultIndex);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

router.post('/sendFormData', async (req, res, next) => {
    try {
        // todo: add logic
        const formData = req.body;
        res.status(200).json({ averageMonthlySalary: 170000, annualIncome: 2000000, salaryForGivenMonth: 185000, month: 'Январь' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

const calculatorRoutes = router;
export default calculatorRoutes;