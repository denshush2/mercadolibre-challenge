/* eslint-disable camelcase */
export interface ISeller {
	id: number
	permalink: string
	registration_date: string
	car_dealer: boolean
	real_estate_agency: boolean
	tags: ISellerTags[]
	seller_reputation: ISellerReputation
	eshop?: ISellerEshop
}

export interface ISellerReputation {
	transactions: {
		total: number
		canceled: number
		period: string
		ratings: {
			negative: number
			positive: number
			neutral: number
		}
		completed: number
	}
	power_seller_status: string | null
	metrics: {
		claims: {
			rate: number
			value: number
			period: string
		}
		delayed_handling_time: {
			rate: number
			value: number
			period: string
		}
		sales: {
			period: string
			completed: number
		}
		cancellations: {
			rate: number
			value: number
			period: string
		}
	}
	level_id: string
}

export interface ISellerEshop {
	nick_name: string
	eshop_rubro: null | string
	eshop_id: number
	eshop_locations: string[]
	site_id: string
	eshop_logo_url: string
	eshop_status_id: number
	seller: number
	eshop_experience: number
}
export type ISellerTags =
	| 'normal'
	| 'user_info_verified'
	| 'credits_profile'
	| 'messages_as_seller'
	| 'messages_as_buyer'
