import React from 'react'
import { render } from 'react-dom'
import './app.global.css'
import styled from 'styled-components'
import { Build } from './features'

document.addEventListener('DOMContentLoaded', () =>
	render(
		<Wrapper>
			<Build />
		</Wrapper>,
		document.getElementById('root')
	)
)

const Wrapper = styled.div`
	width: 1060px;
	margin: auto;
`
