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
      <TitleMetrics>Критерии поиска</TitleMetrics>
				<MetricsList>

						{colName.map((x, i) => (
							<SelectItems data={x} key={i} />
						))}

				</MetricsList>
		</Wrapper>
	)
}

const HeaderTitle = styled.div`
	${CSSextFS_20};
	font-size: 32px;
`

const MetricsList = styled.div`
  width: 240px;
  height: calc(100vh - 175px);
  overflow-y: overlay;

`

const Header = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	& > img {
		margin-right: 20px;
	}
`

const Wrapper = styled.div`
  padding: 30px;
	/* height: 100%; */
  background: #eef1f6;
  flex: 0 0 auto;
`

const TitleMetrics = styled.div`
	${CSSextFS_20};
	margin-bottom: 25px;
`
