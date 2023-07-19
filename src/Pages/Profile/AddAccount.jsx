import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { StyledForm } from '../../styles/addAccount'

export default function AddAccount() {
  const [petName, setPetName] = useState('')
  const [username, setUsername] = useState('')
  const [parentName, setParentName] = useState('')
  console.log(petName, username, parentName)
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Clicked')
    let userInfo = {
      petName,
      username,
      parentName,
    }

    fetch('https://petagram-1b4f4-default-rtdb.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify(userInfo),
    }).then((res) => console.log(res))
  }

  return (
    <Container
      sx={{ backgroundColor: 'aliceblue', height: '100vh' }}
      maxWidth="md"
    >
      <Typography textAlign={'center'} variant="h5" m={5}>
        Create Account
      </Typography>
      <StyledForm>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your pet name"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your usernamename"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter parent name"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      </StyledForm>
    </Container>
  )
}
