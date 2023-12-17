
import Button from '@mui/material/Button'
import { pink } from '@mui/material/colors'
import HomeIcon from '@mui/icons-material/home'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  useColorScheme,
} from '@mui/material/styles'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutLinedIcon from '@mui/icons-material/DarkModeOutLined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box';
function ModeSelect() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event) => {
    const selectdMode = event.target.value
    setMode(selectdMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-model">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-model"
        id="select-dark-light-model"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >

        <MenuItem value="light">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <LightModeIcon fontSize='small' /> light
          </div>
        </MenuItem>
        <MenuItem value="dark">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeOutLinedIcon fontSize='small' /> Dark
          </Box>
        </MenuItem>
        <MenuItem value="system">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

            <SettingsBrightnessIcon fontSize='small' /> system
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeSelect />
      <hr />

      <ModeToggle />
      <hr />
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
