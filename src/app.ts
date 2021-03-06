import express from 'express'

const morgan = require('morgan')

import { router } from './routes'
import { globalErrorHandler } from './common/exceptions/error.handler'

const app = express()

app.use(express.json())
app.use(morgan('short'))
app.use(router)

app.use(globalErrorHandler)

export { app }
