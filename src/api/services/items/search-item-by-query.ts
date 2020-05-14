import _ from 'lodash'
import fetch from 'node-fetch'
import getEnvVars from '../../../../envConfig'

const {
    search_api_uri
} = getEnvVars()

export default async (query: string,  options?: { limit?: number }) => {
    try {
        const limit = _.get(options, 'limit')
        const response = await fetch(
            `${search_api_uri}/search?q=${query}${limit ? `&limit=${limit}` : ''}`)

        return await response.json()

    } catch (error) {
        throw error
    }
}