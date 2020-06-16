import React from 'react'
import styled from 'styled-components'
import { SideBar } from './side-bar'
import { Search } from './search'
import Div100vh from 'react-div-100vh'

export const Main = () => {
	return (
      <Wrapper>
        <SideBar />
        <Search />
      </Wrapper>
	)
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
