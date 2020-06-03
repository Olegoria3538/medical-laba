import React from 'react'
import styled from 'styled-components'
import { CSSTextFS_22, CSSextFS_24 } from '../../../ui/text'
import Logo from '../statick/img/logo.svg'
import { useStore } from 'effector-react'
import { $colName } from '../../model/data-exel'

export const SideBar = () => {
	const colName = useStore($colName)
	return (
		<Wrapper>
			<Header>
				<img src={Logo} />
				<HeaderTitle>МПС</HeaderTitle>
			</Header>
			<Metrics>
				<TitleMetrics>Критерии поиска</TitleMetrics>
				<div>
					{colName.map((x, i) => (
						<ItemMetrics key={i}>{x}</ItemMetrics>
					))}
				</div>
			</Metrics>
		</Wrapper>
	)
}

const HeaderTitle = styled.div`
	${CSSextFS_24};
	font-size: 32px;
`

const Header = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 35px;
	& > img {
		margin-right: 20px;
	}
`

const Wrapper = styled.div`
	width: 325px;
	padding: 30px;
	height: 100%;
	background: #eef1f6;
`

const Metrics = styled.div``

const ItemMetrics = styled.div`
	${CSSTextFS_22};
	margin-bottom: 35px;
	&:last-child {
		margin-bottom: 0;
	}
`

const TitleMetrics = styled.div`
	${CSSextFS_24};
`
