import styled from 'styled-components'

 const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  h1 {
    font-size: 50px;
    font-weight: 200;
    text-shadow: 0.05em 0.05em 0.05em #333;
    color: #1480de;
  }
  .form form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 20px;
  }

  .form input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    line-height: 35px;
    margin-bottom: 20px;
    color: #1480de;
    font-weight: bold;
    width: 50%;
    outline: 0;
    border: 1px solid #1480de;
    border-radius: 30px;
    padding-left: 20px;
    font-size: 20px;
    
    &::placeholder {
      color: #1480de;
      font-weight: 200;
      text-shadow: none;
    }
    box-shadow: 5px 4px 5px -3px rgba(0, 0, 0, 0.64);
  }

  .form button {
    background-color: #1480de;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 15px;
    margin-bottom: 39px;
    width: 20%;
    font-weight: bold;
  }

  .form button:hover {
    background-color: #062643;
  }
  a {
    font-weight: bold;
    font-size: 24px;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`
export default Container