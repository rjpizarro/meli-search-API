import fetch from 'node-fetch'
import getEnvVars from '../../../../envConfig'

const {
    items_api_uri
} = getEnvVars()

export default async (id: string) => {
    try {
        const response = await fetch(`${items_api_uri}/${id}/description`)

        return await response.json()

    } catch (error) {
        throw error
    }
}