import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function Register() {
  const [inputData, setInputData] = useState({
    name: '',
  })
  const handleChange = (e) => {
    return
  }
  return (
    <div>
      <form>
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="outlined-basic"
          variant="outlined"
          placeholder="Pet Name"
          value={inputData.name}
          name="petName"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="outlined-basic"
          variant="outlined"
          placeholder="ID Number"
          value={inputData.name}
          name="idNumber"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="outlined-basic"
          variant="outlined"
          placeholder="Age"
          value={inputData.name}
          name="age"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="outlined-basic"
          variant="outlined"
          placeholder="Owner Name"
          value={inputData.name}
          name="owner"
          onChange={handleChange}
        />
        <Button></Button>
      </form>
    </div>
  )
}
