import React from 'react'
import styled from 'styled-components'
import { SideBar } from './side-bar'
import { Search } from './search'

export const Main = () => {
	return (
		<Wrapper>
			<SideBar />
			<Search />
		</Wrapper>
	)
}

const Wrapper = styled.div`
  overflow-y: hidden;
	display: flex;
	flex-flow: row nowrap;
`
