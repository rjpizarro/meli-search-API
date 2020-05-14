const baseURI = 'https://api.mercadolibre.com'

const ENV = {
    port: process.env.PORT || 8000,
    search_api_uri: `${baseURI}/sites/MLA`,
    items_api_uri: `${baseURI}/items`,
};

const getEnvVars = () => ENV

export default getEnvVars;