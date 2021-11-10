import styled from 'styled-components'

export const ButtonBackground = styled.div`
  position: relative;
  width: 95%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-end;
  cursor: pointer;
  top: 13rem;

  &:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(#1a1a1a, 0.7);
  }

  .plus {
    position: relative;
    z-index: 1;
    cursor: pointer;
    width: 80px;
    height: 80px;
    color: #fff;
    background: #1480de;
    border-radius: 50%;
    border: none;
    transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1),
      transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
    &:after {
      content: '+';
      font-size: 2.5em;
      line-height: 1.1em;
    }
    &:hover {
      transform: rotate(45deg);
      box-shadow: 0 0 1px 15px rgba(#8a3b58, 0.4),
        0 0 1px 30px rgba(#8a3b58, 0.1), 0 0 1px 45px rgba(#8a3b58, 0.1);
    }
  }
`
