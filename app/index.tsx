import React from 'react'
import { render } from 'react-dom'
import './app.global.css'
import { Build } from './features'

document.addEventListener('DOMContentLoaded', () =>
	render(<Build />, document.getElementById('root'))
)
