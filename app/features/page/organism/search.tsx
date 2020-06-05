import React from 'react'
import styled from 'styled-components'
import { FormSearch } from '../molecules/form'
import { TableBuild } from '../molecules/table'

export const Search = () => {
	return (
		<Wrapper>
			<FormSearch />
			<TableBuild />
		</Wrapper>
	)
}

const Wrapper = styled.div`
	flex: 1;
	height: fit-content;
	padding: 0 25px;
`
