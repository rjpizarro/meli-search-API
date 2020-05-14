// VENDOR
import _ from 'lodash'
import express from 'express'
import { decomposePrice } from '../../../libs/formatter'

// SERVICES
import getItemById from '../../services/items/get-item-by-id'
import getItemDescription from '../../services/items/get-item-description'

export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const id: string = _.get(req, 'params.id', '')

    try {
        const itemResponse = await getItemById(id)
        const itemDescriptionResponse = await getItemDescription(id)
        const [integer, decimals] = decomposePrice(itemResponse.price)

        const response = {
            author: {
                name: "Rodrigo",
                lastName: "Pizarro"
            },
            item: {
                id: itemResponse.id,
                title: itemResponse.title,
                price: {
                    currency: itemResponse.currency_id,
                    amount: Number(integer),
                    decimals: decimals ? Number(decimals) : 0
                },
                picture: itemResponse.thumbnail,
                condition: itemResponse.condition,
                free_shipping: _.get(itemResponse, 'shipping.free_shipping'),
                sold_quantity: itemResponse.sold_quantity,
                description: itemDescriptionResponse.plain_text
            }
        }

        return res.status(200).json(response)
    } catch (e) {
        return next(e)
    }
}
