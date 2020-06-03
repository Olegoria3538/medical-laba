import { createStore, createEvent } from 'effector'

const $selectMetrics = createStore<string[]>([])
const setSelectMetrics = createEvent<string>()
$selectMetrics.on(setSelectMetrics, (state, data) =>
	state.includes(data) ? state.filter(x => x !== data) : state.concat(data)
)

export { $selectMetrics, setSelectMetrics }
