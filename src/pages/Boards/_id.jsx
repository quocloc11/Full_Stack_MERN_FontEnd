
import Container from '@mui/material/Container'
import BoarBar from './BoardBar/BoardBar'
import AppBar from '~/components/AppBar/AppBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
import { useEffect, useState } from 'react'
import { fetchBoardDetailsAPI } from '~/apis'

function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '65938faebf9a3b769fcbde4a'

    fetchBoardDetailsAPI(boardId).then((board) => {
      setBoard(board)
    })

  }, [])

  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoarBar board={mockData.board} />
      <BoardContent board={mockData.board} />
    </Container>
  )
}

export default Board