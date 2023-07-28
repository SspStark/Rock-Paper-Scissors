import {ListItem, GameButtonImage, GameButton} from './styledComponent'

const GameItems = props => {
  const {details, playerSelection} = props
  const {id, imageUrl} = details

  const onClickSelection = () => playerSelection(details)

  const dataTestId = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'
      case 'PAPER':
        return 'paperButton'
      case 'SCISSORS':
        return 'scissorsButton'
      default:
        return null
    }
  }

  return (
    <ListItem>
      <GameButton data-testid={dataTestId()} onClick={onClickSelection}>
        <GameButtonImage src={imageUrl} alt={id} />
      </GameButton>
    </ListItem>
  )
}

export default GameItems
