import React, { useState } from 'react'

export function LocationForm ({ onLocationChange }: any): JSX.Element {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if (inputValue !== '') {
      onLocationChange(inputValue)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Location'
        name='location'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type='submit'>SetLocation</button>
    </form>
  )
}
