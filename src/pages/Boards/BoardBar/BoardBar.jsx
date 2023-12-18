import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  },
}

function BoarBar() {
  return (
    <Box sx={{
      width: '100%',
      height: (theme) => theme.trello.boardBarHeight,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 2,
      paddingX: 2,
      overflowX: 'auto',
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '##34495e' : '#1976d2'),

    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />} label="Trần Quốc Lộc"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />} label="Public/Private Workspace"
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />} label='Add to Google Drive'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />} label='Automation'
          clickable
        />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />} label='Filter'
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button variant="outlined" startIcon={<PersonAddIcon />}
          sx={{ color: 'white', borderColor: 'white', '&:hover': { borderColor: 'white' } }}
        >Ivaite</Button>
        <AvatarGroup max={7}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title="Tran Quoc Loc">
            <Avatar alt="Tran Quoc Loc" src='https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A' />
          </Tooltip>
          <Tooltip title="Tran Quoc Loc">
            <Avatar alt="Tran Quoc Loc" src='https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A' />
          </Tooltip>
          <Tooltip title="Tran Quoc Loc">
            <Avatar alt="Tran Quoc Loc" src='https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A' />
          </Tooltip>
          <Tooltip title="Tran Quoc Loc">
            <Avatar alt="Tran Quoc Loc" src='https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A' />
          </Tooltip>
          <Tooltip title="Tran Quoc Loc">
            <Avatar alt="Tran Quoc Loc" src='https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A' />
          </Tooltip>
          <Tooltip title="Tran Quoc Loc">
            <Avatar alt="Tran Quoc Loc" src='https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A' />
          </Tooltip>
          <Tooltip title="Tran Quoc Loc">
            <Avatar alt="Tran Quoc Loc" src='https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A' />
          </Tooltip>
          <Tooltip title="Tran Quoc Loc">
            <Avatar alt="Tran Quoc Loc" src='https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A' />
          </Tooltip>
          <Tooltip title="Tran Quoc Loc">
            <Avatar alt="Tran Quoc Loc" src='https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoarBar