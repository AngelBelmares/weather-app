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
    <form className='flex text-white' onSubmit={handleSubmit}>
      <input
        className='p-1 rounded-sm w-full hover:scale-105 hover:brightness-110 hover:m-0 focus:outline-none bg-white/20 text-white placeholder-white/50'
        type='text'
        placeholder='Location'
        name='location'
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type='submit' className='aspect-square bg-white/20 h-full hover:scale-105 hover:brightness-110'>O</button>
    </form>
  )
}
