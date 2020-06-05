import React, { useState, useMemo } from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useStore } from 'effector-react'
import { $colName, $valueExel } from '../../model/data-exel'
import TablePagination from '@material-ui/core/TablePagination'
import { chunk } from '../utils/functional'
import { TableSortLabel } from '@material-ui/core'

export const TableBuild = () => {
	const colName = useStore($colName)
	const valueExel = useStore($valueExel)
	const [page, setPage] = useState<number>(0)
	const [rowsPerPage, setRowsPerPage] = useState<number>(10)
	const [sortMetric, setSortMetric] = useState<{
		name: string
		direction: 'asc' | 'desc'
	}>({ name: '', direction: 'asc' })

	const sliseRezult = useMemo(() => {
		if (sortMetric) {
			const sortIndex = colName.findIndex(x => x === sortMetric.name)
			return rowsPerPage === -1
				? valueExel
				: chunk<React.ReactText[]>(rowsPerPage)(valueExel)[page]
		}
		return rowsPerPage === -1
			? valueExel
			: chunk<React.ReactText[]>(rowsPerPage)(valueExel)[page]
	}, [page, valueExel, rowsPerPage, colName, sortMetric])

	const clickSort = (name: string) => {
		if (sortMetric.name === name) {
			const met: ['asc', 'desc'] = ['asc', 'desc']
			setSortMetric({
				...sortMetric,
				direction: met.filter(x => x !== sortMetric.direction)[0],
			})
		} else {
			setSortMetric({
				...sortMetric,
				name,
			})
		}
	}

	return (
		<Paper>
			<TableContainer component={Paper}>
				<Table aria-label="simple table" size="small">
					<TableHead>
						<TableRow>
							{colName.map((x, i) => (
								<TableCell key={i}>
									<TableSortLabel
										active={sortMetric.name === x}
										direction={sortMetric.direction}
										onClick={() => clickSort(x)}
									>
										{x}
									</TableSortLabel>
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{sliseRezult.map((x, i) => (
							<TableRow key={i}>
								{x.map((x, i) => (
									<TableCell key={i}>{x}</TableCell>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25, { label: 'Все', value: -1 }]}
				component="div"
				count={valueExel.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onChangePage={(_, p) => setPage(p)}
				onChangeRowsPerPage={e => setRowsPerPage(parseInt(e.target.value, 10))}
			/>
		</Paper>
	)
}