import express from 'express'

const routeNotImplemented = (req: express.Request, res: express.Response) => {
    res.status(501).send(`${req.method} ${req.path} not implemented`)
}

export default routeNotImplemented