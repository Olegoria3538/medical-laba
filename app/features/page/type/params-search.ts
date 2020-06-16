export interface ParamsType {
	name: string
	value: string[] | string | number
	range: {
		up: number
		down: number
	} | null
}
