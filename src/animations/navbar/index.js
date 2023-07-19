import { keyframes } from '@mui/material'

export const slideInRight = keyframes`
0% {
    -webkit-transform: translateX(30px);
            transform: translateX(30px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`
