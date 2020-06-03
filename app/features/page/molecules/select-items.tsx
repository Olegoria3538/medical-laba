import React from 'react'
import styled, { css } from 'styled-components'
import { CSSTextFS_16 } from '../../../ui/text'
import CheckSvg from '../static/img/check.svg'
import { setSelectMetrics, $selectMetrics } from '../../model/select-metrics'
import { useStore } from 'effector-react'

export const SelectItems: React.FC<{ data: string }> = ({ data }) => {
	const selectMetrics = useStore($selectMetrics)
	return (
		<ItemMetrics onClick={() => setSelectMetrics(data)}>
			<div>
				<Check active={selectMetrics.includes(data)}>
					<CheckImg src={CheckSvg} />
				</Check>
			</div>
			{data}
		</ItemMetrics>
	)
}

const CheckImg = styled.img`
	width: 13px;
	height: 13px;
	display: none;
`

const Check = styled.div<{ active?: boolean }>`
	height: 15px;
	width: 15px;
	background: #ffffff;
	border: 1px solid #000000;
	box-sizing: border-box;
	border-radius: 3px;
	display: flex;
	justify-content: center;
	align-items: center;

	${({ active }) =>
		active &&
		css`
			background: #1867c0;
			border: 1px solid #1867c0;
			& > img {
				display: block;
			}
		`}
`

const ItemMetrics = styled.div`
	${CSSTextFS_16};
	margin-bottom: 35px;
	display: flex;
	align-items: center;
	&:last-child {
		margin-bottom: 0;
	}
	${Check} {
		margin-right: 20px;
	}
	cursor: pointer;
`
