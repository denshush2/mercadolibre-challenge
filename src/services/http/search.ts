import Http from '@config/http'
import {
	IHttpResponseSuccess,
	IHttResponseError,
} from '@interfaces/HttpResponse.interface'
import buildError from '@utils/errorResponse'

export const findByQuery = async (
	query: string
): Promise<IHttpResponseSuccess<'search'> | IHttResponseError> => {
	try {
		const httpResponse = await Http().get(SEARCH_URL, {
			params: {
				q: query,
			},
		})
	} catch (error) {
		return buildError('findByQuery', error)
	}
}
