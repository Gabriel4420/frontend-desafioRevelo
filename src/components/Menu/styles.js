import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  background: #1480de;
  height: 8vh;
  width: 100%;
  a {
    color: white !important;
    text-decoration: none !important;
    transition: all ease 0.3s;
    font-weight: 400 !important;
    font-size: 16px !important;
  }
  a:hover {
    text-decoration: underline !important;
    opacity: 0.7;
    font-weight: 400 !important;
  }

  .nav-list {
    list-style: none;
    display: flex;
  }
  .nav-list li {
    letter-spacing: 3px;
    margin-left: 32px;
  }

  .Icon {
    width: 30px;
    height: 30px;
  }

  .btn {
    padding: 10px;
    margin-top: -15px;
    border: none;
    color: ${(props) => (props.colorLabel == 'primary' ? '#1480de' : '#fff')};
    cursor: pointer;
  }

  .btn-primary {
    background-color: #1480de;
  }

  .btn-secondary {
    background-color: #f00b00;
    color: #fff;
    transition: all ease 0.5s;
    &:hover {
      background-color: #f0523f;
    }
  }
`
