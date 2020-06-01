import React from 'react'
import { DropZone } from './drop-zone'
import { $dataExel } from './model/data-exel'
import { useStore } from 'effector-react'

export const Build = () => {
	const { complete, data } = useStore($dataExel)
	if (!complete) return <DropZone />
	return <div>{JSON.stringify(data)}</div>
}
