/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'
import { useStore } from 'effector-react'
import { $groupExel } from '../../model/data-exel'
import { CSSTextFS_16 } from '../../../ui/text'

const onSubmit = async (values: any) => {
	window.alert(JSON.stringify(values))
}

export const FormSearch = () => {
	const groupExel = useStore($groupExel)
	return (
		<Wrapper>
			<h1>Поиск</h1>
			<Form
				onSubmit={onSubmit}
				initialValues={{ stooge: 'larry', employed: false }}
				render={({ handleSubmit, form, submitting, pristine }) => (
					<form onSubmit={handleSubmit}>
						<WrapperMetrics>
							{groupExel.map((x, i) => (
								<WrapperItem key={i}>
									<LabelItem>{x.name}</LabelItem>
									{x.type === 'number' && (
										<Input name={x.name} component="input" type="text" />
									)}
									{x.type === 'string' && (
										<Input name={x.name} multiple component="select">
											{x?.data?.map((x, i) => (
												<option key={i} value={x}>
													{x}
												</option>
											))}
										</Input>
									)}
								</WrapperItem>
							))}
						</WrapperMetrics>

						<div className="buttons">
							<button type="submit" disabled={submitting || pristine}>
								Submit
							</button>
							<button
								type="button"
								onClick={form.reset}
								disabled={submitting || pristine}
							>
								Reset
							</button>
						</div>
					</form>
				)}
			/>
		</Wrapper>
	)
}

const WrapperItem = styled.div`
	margin-bottom: 15px;
	margin-right: 30px;
	width: 120px;
`

const Wrapper = styled.div``

const WrapperMetrics = styled.div`
	display: flex;
	flex-flow: wrap;
`

const LabelItem = styled.div`
	${CSSTextFS_16};
	white-space: nowrap;
	margin-bottom: 5px;
`

const Input = styled(Field)`
	width: 100%;
	height: 35px;
	border-radius: 10px;
	background: #ffffff;
	border: 2px solid #6396ea;
	padding-left: 10px;
`
