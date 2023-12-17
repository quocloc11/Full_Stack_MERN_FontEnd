
import Button from '@mui/material/Button';
import { pink } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/home'
import Typography from '@mui/material/Typography'
function App() {
  return (
    <>
      <div>Quoc loc</div>

      <Typography variant='body' color='text.secondary'>Typograp</Typography>
      <Button variant='text'>Text</Button>
      <Button variant='contained'>contained</Button>
      <Button variant='outlined'>outlined</Button>
      <br />
      <HomeIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  )
}

export default App
