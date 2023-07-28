import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
  padding: 15px;
  font-family: Bree Serif;
`
export const ScoreBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 2px solid white;
  border-radius: 10px;
  width: 100%;
  @media (min-width: 768px) {
    margin-top: 40px;
    width: 80%;
    max-width: 1000px;
  }
`
export const Heading = styled.h1`
  color: white;
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  color: #223a5f;
`
export const ScoreText = styled.p`
  font-size: 16px;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 26px;
  }
`

export const Score = styled.p`
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: bold;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`
export const GameViewContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0px;
  width: 100%;
  margin-top: 40px;
  @media screen and (min-width: 575px) {
    width: 400px;
    margin-top: 60px;
  }
`
export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  @media (min-width: 350px) {
    width: 400px;
  }
`

export const PlayersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Player = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const PlayerText = styled.p`
  color: #ffffff;
  font-size: 20px;
`

export const PlayerSelectItem = styled.img`
  width: 120px;
  @media (min-width: 400px) {
    width: 150px;
  }
`

export const ResultTest = styled.p`
  color: #ffffff;
  font-size: 22px;
`

export const PlayAgain = styled.button`
  color: #223a5f;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  font-family: Bree Serif;
  padding: 8px 16px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
`
