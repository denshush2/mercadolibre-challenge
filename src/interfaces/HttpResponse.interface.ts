/* eslint-disable camelcase */
import { IProduct } from './Product.interface'

export interface IHttResponseError {
	error: true
	message: string
}

interface IHttpResponseSuccessList {
	search: {
		site_id: string
		query: string
		paging: {
			total: number
			primary_results: number
			offset: number
			limit: number
		}
		results: IProduct[]
	}
}
export interface IHttpResponseSuccess<
	T extends keyof IHttpResponseSuccessList
> {
	error: false
	data: IHttpResponseSuccessList[T]
}
