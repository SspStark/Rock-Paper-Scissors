import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  @media screen and (min-width: 390px) {
    width: 150px;
  }
`
export const GameButton = styled.button`
  width: 100%;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
export const GameButtonImage = styled.img`
  width: 100%;
  margin: 0;
`
