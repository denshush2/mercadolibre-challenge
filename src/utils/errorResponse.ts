import { IHttResponseError } from '@interfaces/HttpResponse.interface'

const buildErrorResponse = (
	functionName: string,
	error: unknown
): IHttResponseError => {
	if (error instanceof Error) {
		return {
			error: true,
			message: error.message,
		}
	}
	return {
		error: true,
		message: `${functionName}: unkonwn error`,
	}
}
export default buildErrorResponse
