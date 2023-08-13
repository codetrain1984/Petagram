import React, { useState } from 'react'
import { LoginBox, LoginContainer } from '../styles/login'
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'

export default function Login() {
  const [checked, setChecked] = useState(true)
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  })
  console.log(loginData)

  const handleChange = (event) => {
    setChecked(event.target.checked)
  }
  const handleData = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault()
    let inputData = {
      username: loginData.username,
      password: loginData.password,
    }
    fetch('https://petagram-1b4f4-default-rtdb.firebaseio.com/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputData),
    })
      .then(async (res) => {
        if (!res.ok) {
          const text = await res.text()
          throw new Error(text)
        } else {
          return res.json()
        }
      })
      .then((data) => console.log(data))
  }
  return (
    <>
      <LoginBox>
        <LoginContainer>
          <Typography mb={4} variant="h4">
            Login
          </Typography>
          <TextField
            autoFocus
            fullWidth
            sx={{ marginBottom: 1 }}
            id="outlined-basic"
            variant="outlined"
            placeholder="Username or Email"
            name="username"
            onChange={handleData}
          />
          <TextField
            type="password"
            fullWidth
            sx={{ marginBottom: 1 }}
            id="outlined-basic"
            variant="outlined"
            placeholder="Password"
            name="password"
            onChange={handleData}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            label="Save your password"
          />
          <Button onClick={handleClick} variant="contained" fullWidth>
            Login
          </Button>
        </LoginContainer>
      </LoginBox>
    </>
  )
}
