// Shared Imports
import { IEnvironment, EEnvironment } from '@shared/models'

export const environment: IEnvironment = {
	production: false,
	apiUrl: 'http://127.0.0.1:5000',
	environment: EEnvironment.dev,
}
