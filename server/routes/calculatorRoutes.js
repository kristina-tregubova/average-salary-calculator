import Router from 'express';
import FormData from '../models/FormData.js';
import CalculationResults from '../models/CalculationResults.js';
import Indices from '../models/Indices.js';
const router = Router();

router.get('/getCurrentIndices', async (req, res, next) => {
    try {
        // find existing or create one if none found (first attempt)
        // findOneAndUpdate is used as only this method supports upsert option
        const indices = await Indices.findOneAndUpdate({}, {}, { upsert: true, new: true, setDefaultsOnInsert: true });
        res.status(200).json(indices);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

router.put('/setCustomIndices', async (req, res, next) => {
    try {
        const newIndices = req.body;
        const indices = await Indices.findOneAndReplace({}, newIndices, { new: true });
        res.status(200).json(indices);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

function getIndicesFieldDefaultValue(indexName) {
    return Indices.schema.paths[indexName].options.default;
}

router.put('/resetCustomIndex', async (req, res, next) => {
    try {
        const indexName = req.body.keyName;
        const indexDefaultValue = getIndicesFieldDefaultValue(indexName);
        const indices = await Indices.findOneAndUpdate({}, {[indexName]: indexDefaultValue}, { new: true });
        res.status(200).json(indices);
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Что-то пошло не так, попробуйте снова" });
    }
});

router.get('/resetAllIndices', async (req, res, next) => {
    try {
        const indices = await Indices.findOneAndReplace({}, {}, { new: true });
        res.status(200).json(indices);
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