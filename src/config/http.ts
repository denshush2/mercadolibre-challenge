import axios, { AxiosInstance } from 'axios'
import { CONFIG_HTTP_BASE_URL } from './variables'

let instance: AxiosInstance | null = null

const httpInstance = (): AxiosInstance => {
	if (!instance) {
		instance = axios.create({ baseURL: CONFIG_HTTP_BASE_URL })
	}
	return instance
}
export default httpInstance
