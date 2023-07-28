import {Component} from 'react'

import RulesPopup from '../RulesPopup'
import GameItems from '../GameItems'

import {
  AppContainer,
  ScoreBoard,
  Heading,
  ScoreContainer,
  ScoreText,
  Score,
  GameViewContainer,
  GameResultContainer,
  PlayersContainer,
  Player,
  PlayerText,
  PlayerSelectItem,
  ResultTest,
  PlayAgain,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class RockPaperScissors extends Component {
  state = {
    isGameInProgress: true,
    playerChoice: {},
    opponentSelected: choicesList[Math.floor(Math.random()) * 3],
    score: 0,
    gameResult: '',
  }

  playerSelection = player => {
    const {opponentSelected} = this.state
    if (player.id === opponentSelected.id) {
      this.setState({
        isGameInProgress: false,
        playerChoice: player,
        gameResult: 'IT IS DRAW',
      })
    } else if (
      (player.id === 'ROCK' && opponentSelected.id === 'SCISSORS') ||
      (player.id === 'SCISSORS' && opponentSelected.id === 'PAPER') ||
      (player.id === 'PAPER' && opponentSelected.id === 'ROCK')
    ) {
      this.setState(prevState => ({
        isGameInProgress: false,
        playerChoice: player,
        gameResult: 'YOU WON',
        score: prevState.score + 1,
      }))
    } else {
      this.setState(prevState => ({
        isGameInProgress: false,
        playerChoice: player,
        gameResult: 'YOU LOSE',
        score: prevState.score - 1,
      }))
    }
  }

  renderGameView = () => (
    <GameViewContainer>
      {choicesList.map(each => (
        <GameItems
          details={each}
          key={each.id}
          playerSelection={this.playerSelection}
        />
      ))}
    </GameViewContainer>
  )

  playAgain = () => {
    this.setState({
      isGameInProgress: true,
      playerChoice: {},
      opponentSelected: choicesList[Math.floor(Math.random() * 3)],
      gameResult: '',
    })
  }

  renderResultView = () => {
    const {playerChoice, opponentSelected, gameResult} = this.state
    return (
      <GameResultContainer>
        <PlayersContainer>
          <Player>
            <PlayerText>YOU</PlayerText>
            <PlayerSelectItem src={playerChoice.imageUrl} alt="your choice" />
          </Player>
          <Player>
            <PlayerText>OPPONENT</PlayerText>
            <PlayerSelectItem
              src={opponentSelected.imageUrl}
              alt="opponent choice"
            />
          </Player>
        </PlayersContainer>
        <ResultTest>{gameResult}</ResultTest>
        <PlayAgain type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgain>
      </GameResultContainer>
    )
  }

  render() {
    const {isGameInProgress, score} = this.state
    return (
      <AppContainer>
        <ScoreBoard>
          <Heading>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </Heading>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
          </ScoreContainer>
        </ScoreBoard>
        {isGameInProgress ? this.renderGameView() : this.renderResultView()}
        <RulesPopup />
      </AppContainer>
    )
  }
}

export default RockPaperScissors
