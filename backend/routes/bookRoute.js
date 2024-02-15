import express from 'express'
import { getBooks , getBook , postBook , updateBook , deleteBook} from '../controllers/books.controller.js';
const router = express.Router()
    


router.get('/',getBooks)
router.get('/:id',getBook)
router.post('/',postBook)
router.put('/:id',updateBook)
router.delete('/:id',deleteBook)






export default router