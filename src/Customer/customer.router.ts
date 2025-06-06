// src/routes/customer.router.ts
import express from 'express';
import { 
    getAllCustomers, 
    getCustomerById, 
    createCustomer, 
    updateCustomer, 
    deleteCustomer 
} from './customer.controller';

const router = express.Router();

router.get('/', getAllCustomers);
router.get('/:id', getCustomerById);
router.post('/', createCustomer);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;
