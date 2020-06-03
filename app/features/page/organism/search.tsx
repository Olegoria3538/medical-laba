import React from 'react'
import styled from 'styled-components'
import { FormSearch } from '../molecules/form'

export const Search = () => {
	return (
		<Wrapper>
			<FormSearch />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	flex: 1;
`
