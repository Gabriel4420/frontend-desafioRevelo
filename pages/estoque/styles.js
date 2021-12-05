import styled from 'styled-components'

 const Container = styled.div`
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
  }

  .table {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .containertable{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 5%;
  }
`


export default Container