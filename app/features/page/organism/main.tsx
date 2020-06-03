import React from 'react'
import styled from 'styled-components'
import { SideBar } from './side-bar'

export const Main = () => {
	return (
		<Wrapper>
			<SideBar />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
`
