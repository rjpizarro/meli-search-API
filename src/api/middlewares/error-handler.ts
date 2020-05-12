import express from 'express'

const errorHandler = (error: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.status(400).json({
        title: 'Error',
        code: 400,
        message: error.message || 'Something went wrong.',
        stack: error.stack
    })
}

export default errorHandler
