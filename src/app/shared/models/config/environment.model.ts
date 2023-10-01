export interface IEnvironment {
	production: boolean
	environment: EEnvironment
	apiUrl: string
}

export enum EEnvironment {
	prod = 'prod',
	dev = 'dev',
	local = 'local',
}
