import React from 'react'
import styled from 'styled-components'
import { FormSearch } from '../molecules/form'
import Table from '../../components/Table';
import { $colName, $dataExel } from "../../model/data-exel"
import { useStore } from 'effector-react'

export const Search = () => {
  const headers = useStore($colName)
  const { data } = useStore($dataExel)
  console.log("colName", headers);
  console.log("data", data);

	return (
		<Wrapper>
			<FormSearch />
      <Table headers={headers} data={data}/>
		</Wrapper>
	)
}

const Wrapper = styled.div`
  flex: 1;
  height: fit-content;
  padding: 0 25px;
`
