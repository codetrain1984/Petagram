import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import { Link } from 'react-router-dom'

export default function MessageTitle() {
  return (
    <div>
      <Box>
        <Box sx={{ width: '100%', maxWidth: 560 }} height={90}>
          <Stack
            position="fixed"
            sx={{ width: { xs: '95%', sm: '18%' } }}
            p={1}
          >
            <Stack
              color={'text.primary'}
              direction="row"
              justifyContent="space-between"
            >
              <Button
                sx={{ textTransform: 'capitalize', fontSize: '18px' }}
                endIcon={<ExpandMoreIcon />}
              >
                Pally
              </Button>
              <Link to="/edit">
                <IconButton>
                  <BorderColorIcon />
                </IconButton>
              </Link>
            </Stack>
            <Typography ml={1}>Messages</Typography>
          </Stack>
        </Box>
      </Box>
    </div>
  )
}
