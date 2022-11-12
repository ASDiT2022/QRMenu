import { Router } from 'express'

import AuthRouter from './authorization'
import UsersRouter from './users'
import FileRouter from './files'
import RolesRouter from './roles'

import LogsRouter from './logs'

const router = Router()

export default () => {
    router.use('/authorization', AuthRouter())
    router.use('/users', UsersRouter())
    router.use('/files', FileRouter())
    router.use('/roles', RolesRouter())

    router.use('/logs', LogsRouter())

    return router
}