
import Container from '@mui/material/Container'
import BoarBar from './BoardBar/BoardBar'
import AppBar from '~/components/AppBar/AppBar'
import BoardContent from './BoardContent/BoardContent'
import { mockData } from '~/apis/mock-data'
import { useEffect, useState } from 'react'

import { fetchBoardDetailsAPI, createNewCardAPI, createNewColumnAPI } from '~/apis'
function Board() {
  const [board, setBoard] = useState(null)

  useEffect(() => {
    const boardId = '65938faebf9a3b769fcbde4a'

    fetchBoardDetailsAPI(boardId).then(board => {
      setBoard(board)
    })

  }, [])

  const createNewColumn = async (newColumnData) => {
    const createdColumn = await createNewColumnAPI({
      ...newColumnData,
      boardId: board._id
    })

    console.log('createNewColumn', createdColumn)
  }

  const createNewCard = async (newCardData) => {
    const createdCard = await createNewCardAPI({
      ...newCardData,
      boardId: board._id
    })

    console.log('createNewColumn', createdCard)
  }
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
      <AppBar />
      <BoarBar board={board} />
      <BoardContent
        board={board}
        createNewColumn={createNewColumn}
        createNewCard={createNewCard}
      />
    </Container>
  )
}

export default Board