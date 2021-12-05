import styled from "styled-components"

const InputPassword = styled.input`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
line-height: 35px;
margin-bottom: 20px;
color: #1480de;
font-weight: bold;
width: 45% !important;
outline: 0;
border: 1px solid #1480de;
border-radius: 30px;
padding-left: 20px;
font-size: 20px;
margin-right: 10px;

&::placeholder {
  color: #1480de;
  font-weight: 200;
  text-shadow: none;
}
box-shadow: 5px 4px 5px -3px rgba(0, 0, 0, 0.64);
`

export default InputPassword