import React from 'react'
import { DropZone } from './drop-zone'
import { $dataExel } from './model/data-exel'
import { useStore } from 'effector-react'
import { Main } from './page/organism/main'

export const Build = () => {
	const { complete } = useStore($dataExel)
	if (!complete) return <DropZone />
	return <Main />
}
