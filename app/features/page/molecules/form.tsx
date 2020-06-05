import React from 'react'
import { Form } from 'react-final-form'
import styled from 'styled-components'
import { useStore } from 'effector-react'
import { $groupExel } from '../../model/data-exel'
import { TextField, Select } from 'mui-rff'
import { MenuItem, Checkbox, ListItemText, Button } from '@material-ui/core'

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
				initialValues={{}}
				render={({ handleSubmit, form, submitting, pristine, values }) => (
					<form onSubmit={handleSubmit}>
						<WrapperMetrics>
							{groupExel.map((x, i) => (
								<WrapperItem key={i}>
									{x.type === 'number' && (
										<TextField label={x.name} name={x.name} type="text" />
									)}
									{x.type === 'string' && (
										<Select
											name={x.name}
											label={x.name}
											multiple
											renderValue={(selected: any) => selected.join(', ')}
										>
											{x?.data?.map((q, i) => (
												<MenuItem key={i} value={q}>
													<Checkbox checked={values[x.name]?.indexOf(q) > -1} />
													<ListItemText primary={q} />
												</MenuItem>
											))}
										</Select>
									)}
								</WrapperItem>
							))}
						</WrapperMetrics>

						<WrapperBtn className="buttons">
							<Button
								type="submit"
								color="primary"
								variant="contained"
								disabled={submitting || pristine}
								style={{ marginRight: '20px' }}
							>
								Поиск
							</Button>
							<Button
								type="button"
								color="secondary"
								variant="contained"
								onClick={form.reset}
								disabled={submitting || pristine}
							>
								Сбросить
							</Button>
						</WrapperBtn>
					</form>
				)}
			/>
		</Wrapper>
	)
}

const WrapperBtn = styled.div`
	display: flex;
`

const WrapperItem = styled.div`
	margin-bottom: 15px;
	margin-right: 30px;
	width: 200px;
`

const Wrapper = styled.div``

const WrapperMetrics = styled.div`
	display: flex;
	flex-flow: wrap;
`
