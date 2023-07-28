import styled from 'styled-components'

export const PopupContainer = styled.div`
  align-self: flex-end;
  margin-top: auto;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-right: 24px;
  }
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  font-family: 'Bree Serif';
  color: #223a5f;
  border: none;
  border-radius: 5px;
  padding: 5px 12px;
  cursor: pointer;
  outline: none;
`
export const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CloseButton = styled.button`
  border: none;
  align-self: flex-end;
  padding: 10px;
`
export const RulesImage = styled.img`
  width: 500px;
  margin: 20px;
`
