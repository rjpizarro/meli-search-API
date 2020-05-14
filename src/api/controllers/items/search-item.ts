// VENDOR
import _ from 'lodash'
import express from 'express'
import { decomposePrice } from '../../../libs/formatter'

// SERVICES
import searchItemByQuery from '../../services/items/search-item-by-query'

export default async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const query: string = _.get(req, 'query.q', '')

    try {
        const searchResponse = await searchItemByQuery(query)
        const results = _.get(searchResponse, 'results', [])
        const reducedItems = results.reduce((acc: any, item: any) => {
            const [integer, decimals] = decomposePrice(item.price)

            return {
                categories: _.uniq([...acc.categories, item.category_id]),
                items: [
                    ...acc.items,
                    {
                        id: item.id,
                        title: item.title,
                        price: {
                            currency: item.currency_id,
                            amount: Number(integer),
                            decimals: decimals ? Number(decimals) : 0
                        },
                        picture: item.thumbnail,
                        condition: item.condition,
                        free_shipping: _.get(item, 'shipping.free_shipping')
                    }
                ]
            }
        }, {
            categories: [],
            items: []
        })

        const response = {
            author: {
                name: "Rodrigo",
                lastName: "Pizarro"
            },
            ...reducedItems
        }

        return res.status(200).json(response)
    } catch (e) {
        return next(e)
    }
}
