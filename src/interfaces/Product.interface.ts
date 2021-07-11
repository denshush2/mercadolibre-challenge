import { ISeller } from './Seller.interface'

/* eslint-disable camelcase */
export interface IProduct {
	id: string
	site_id: string
	title: string
	seller: ISeller
	price: number
	prices: {
		id: string
		prices: IProductPrice[]
		presentation: {
			display_currency: string
		}
		payment_method_prices: string[]
		reference_prices: string[]
		purchase_discounts: string[]
	}
	sale_price: null
	currency_id: string
	available_quantity: number
	sold_quantity: number
	buying_mode: string
	listing_type_id: string
	stop_time: string
	condition: string
	permalink: string
	thumbnail: string
	thumbnail_id: string
	accepts_mercadopago: boolean
	installments: {
		quantity: number
		amount: number
		rate: number
		currency_id: string
	}
	address: {
		state_id: string
		state_name: string
		city_id: string
		city_name: string
	}
	shipping: {
		free_shipping: boolean
		mode: string
		tags: string[]
		logistic_type: string
		store_pick_up: false
	}
	seller_address: {
		id: string
		comment: string
		address_line: string
		zip_code: string
		country: {
			id: string
			name: string
		}
		state: {
			id: string
			name: string
		}
		city: {
			id: string
			name: string
		}
		latitude: string
		longitude: string
	}
	attributes: IProductAttribute[]
	original_price: number | null
	category_id: string
	official_store_id: string | null
	domain_id: string
	catalog_product_id: string
	tags: string[]
	catalog_listing: boolean
	use_thumbnail_id: boolean
	order_backend: number
}

export interface IProductAttribute {
	value_name: string
	id: string
	name: string
	value_id: string
	value_struct: null
	values: [
		{
			name: string
			struct: null
			source: number
			id: string
		}
	]
	attribute_group_id: string
	attribute_group_name: string
	source: number
}
export interface IProductPrice {
	id: string
	type: string
	conditions: {
		context_restrictions: string[]
		start_time: string | null
		end_time: string | null
		eligible: boolean
	}
	amount: number
	regular_amount: string | null
	currency_id: string
	exchange_rate_context: string
	metadata: unknown
	last_updated: string
}
