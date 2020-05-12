// VENDOR
import _ from 'lodash'
import express from 'express'

// SERVICES


export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    return res.status(200).json({})
}
