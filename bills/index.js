import express from 'express'
import create from './services/create'
import remove from './services/remove'
import get from './services/get'

const router = express.Router()

router.get('/', get)
router.post('/', create)
router.delete('/:id', remove)

export default router
