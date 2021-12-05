import styled from 'styled-components'

export const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead {
    height: 40px;
    background-color: ${(props) => props.theme.colors['primary+1']};
  }
  th {
    text-align: center;
  }
  tr {
    height: 40px;
  }
  tr:nth-child(even) {
    background-color: ${(props) => props.theme.colors['primary']};
    color: white;
  }
  td {
    max-width: 50px;
    height: 40px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    padding-left: 5px;
    padding-right: 5px;
  }
`
