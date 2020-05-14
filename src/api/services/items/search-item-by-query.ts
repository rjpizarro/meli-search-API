import fetch from 'node-fetch'
import getEnvVars from '../../../../envConfig'

const {
    search_api_uri
} = getEnvVars()

export default async (query: string) => {
    try {
        const response = await fetch(`${search_api_uri}/search?q=${query}`)

        return await response.json()

    } catch (error) {
        throw error
    }
}