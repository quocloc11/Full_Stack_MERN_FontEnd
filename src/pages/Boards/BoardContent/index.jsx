import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud'
import AddCardIcon from '@mui/icons-material/AddCard';
import Tooltip from '@mui/material/Tooltip';
import AttachmentIcon from '@mui/icons-material/Attachment';
import CommentIcon from '@mui/icons-material/Comment'; import GroupIcon from '@mui/icons-material/Group';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
const COLUM_HEADER_HEIGHT = '50px'
const COLUM_FOOTER_HEIGHT = '50px'

function BoardContent() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  };
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: '100%',
      height: (theme) => theme.trello.boardContentHeight,
      p: '10px 0'
    }}
    >
      <Box sx={{
        bgColor: 'inherit',
        width: '100%',
        height: '100%',
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 }
      }}>


        {/* Box colum 1 */}
        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}>
          <Box sx={{
            height: COLUM_HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography variant='h6' sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>Colum Title</Typography>
            <Box>
              <Tooltip title="More options">
                <KeyboardArrowDownIcon

                  sx={{ color: 'text.primary', cursor: 'pointer' }}

                  id="basic-colum-dropdown"
                  aria-controls={open ? 'basic-menu-colum-dropdown' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-menu-colum-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-colum-dropdown'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>

                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>

                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>copy</ListItemText>

                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>

                </MenuItem>

                <Divider />
                <MenuItem>
                  <ListItemIcon> <DeleteForeverIcon fontSize="small" />

                  </ListItemIcon>
                  <ListItemText>Remove Archive this colum</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this colum</ListItemText>
                </MenuItem>
              </Menu>

            </Box>
          </Box>
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(
            ${theme.trello.boardContentHeight} - 
            ${theme.spacing(5)} - 
            ${COLUM_HEADER_HEIGHT} -
            ${COLUM_FOOTER_HEIGHT}
            )`,
            '*&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da'
            },
            '*&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'

            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Trần Quốc Lộc</Typography>

              </CardContent>
              <CardActions sx={{ p: '0 4px 8 px 4px' }}>
                <Button size="small" startIcon={<GroupIcon />}>20</Button>
                <Button size="small" startIcon={<CommentIcon />}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon />}>10</Button>

              </CardActions>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card 01</Typography>
              </CardContent>
            </Card>

          </Box>



          <Box sx={{
            height: COLUM_FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'space-between'

          }}>
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box >
        {/* Box colum 2 */}

        <Box sx={{
          minWidth: '300px',
          maxWidth: '300px',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          ml: 2,
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
        }}>
          <Box sx={{
            height: COLUM_HEADER_HEIGHT,
            p: 2,
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'space-between'
          }}>
            <Typography variant='h6' sx={{
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '1rem'
            }}>Colum Title</Typography>
            <Box>
              <Tooltip title="More options">
                <KeyboardArrowDownIcon

                  sx={{ color: 'text.primary', cursor: 'pointer' }}

                  id="basic-colum-dropdown"
                  aria-controls={open ? 'basic-menu-colum-dropdown' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                />
              </Tooltip>
              <Menu
                id="basic-menu-colum-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-colum-dropdown'
                }}
              >
                <MenuItem>
                  <ListItemIcon>
                    <AddCardIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Add new card</ListItemText>

                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Cut</ListItemText>

                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>copy</ListItemText>

                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Paste</ListItemText>

                </MenuItem>

                <Divider />
                <MenuItem>
                  <ListItemIcon> <DeleteForeverIcon fontSize="small" />

                  </ListItemIcon>
                  <ListItemText>Remove Archive this colum</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Archive this colum</ListItemText>
                </MenuItem>
              </Menu>

            </Box>
          </Box>
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(
            ${theme.trello.boardContentHeight} - 
            ${theme.spacing(5)} - 
            ${COLUM_HEADER_HEIGHT} -
            ${COLUM_FOOTER_HEIGHT}
            )`,
            '*&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da'
            },
            '*&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'

            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: 140 }}
                image="https://scontent.xx.fbcdn.net/v/t1.15752-9/398370164_6113920898711123_7676872517399476854_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=VubIAyBAtqsAX8kuZq0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQPF1CfGEsZhJw0pcfH7EWdffjaQ0T_JcqhBeh_4ZhSEQ&oe=65A6653A"
                title="green iguana"
              />
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Trần Quốc Lộc</Typography>

              </CardContent>
              <CardActions sx={{ p: '0 4px 8 px 4px' }}>
                <Button size="small" startIcon={<GroupIcon />}>20</Button>
                <Button size="small" startIcon={<CommentIcon />}>15</Button>
                <Button size="small" startIcon={<AttachmentIcon />}>10</Button>

              </CardActions>
            </Card>

            <Card sx={{
              cursor: 'pointer',
              overflow: 'unset',
              boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)'
            }}>
              <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
                <Typography>Card 02</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{
            height: COLUM_FOOTER_HEIGHT,
            p: 2,
            display: 'flex',
            justifyItems: 'center',
            justifyContent: 'space-between'

          }}>
            <Button startIcon={<AddCardIcon />}>Add new card</Button>
            <Tooltip title="Drag to move">
              <DragHandleIcon sx={{ cursor: 'pointer' }} />
            </Tooltip>
          </Box>
        </Box >
      </Box >
    </Box>
  )
}

export default BoardContent