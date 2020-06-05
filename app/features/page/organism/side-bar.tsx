import React from 'react'
import styled from 'styled-components'
import { CSSextFS_20 } from '../../../ui/text'
//@ts-ignore
import Logo from '../static/img/logo.svg'
import { useStore } from 'effector-react'
import { $colName } from '../../model/data-exel'
import { SelectItems } from '../molecules/select-items'

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
				<ListOuter>
					<div>
						{colName.map((x, i) => (
							<SelectItems data={x} key={i} />
						))}
					</div>
				</ListOuter>
			</Metrics>
		</Wrapper>
	)
}

const HeaderTitle = styled.div`
	${CSSextFS_20};
	font-size: 32px;
`
const ListOuter = styled.div`
	height: min-content;
	overflow: hidden;
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
	width: 200px;
	padding: 30px;
	height: 100%;
	background: #eef1f6;
`
// margin-right: 50px;

const Metrics = styled.div``

const TitleMetrics = styled.div`
	${CSSextFS_20};
	margin-bottom: 50px;
`
