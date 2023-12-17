
import Container from '@mui/material/Container'
import BoarBar from './BoardBar'
import AppBar from '~/components/AppBar'
import BoardContent from './BoardContent'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoarBar />
      <BoardContent />
    </Container>
  )
}

export default Board