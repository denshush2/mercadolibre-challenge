import dotenv from 'dotenv'

dotenv.config()

export const CONFIG_HTTP_BASE_URL =
	process.env.HTTP_BASE_URL ||
	(() => {
		console.log('Variable HTTP_BASE_URL is not set! Using default variable')
		return 'https://api.mercadolibre.com'
	})()
export const CONFIG_PUBLIC_URL =
	process.env.PUBLIC_URL ||
	(() => {
		console.log('Variable PUBLIC_URL is not set! Using default variable')
		return 'http://localhost'
	})()
