import '../App.scss';
import React, { useState } from 'react'

const Password = () => {

  const numbers = '0123456789'
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const symbols = "!'^+%&/()=?_#$½§{[]}|;:>÷`<.*-@é"
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(20)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const GeneratePassword = (e) => {

    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      alert('Select options', true)
    }

    let characterList = ''

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters
    }

    if (includeNumbers) {
      characterList = characterList + numbers
    }

    if (includeSymbols) {
      characterList = characterList + symbols
    }

    setPassword(createPassword(characterList))
  }

  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password
    document.body.appendChild(newTextArea)
    newTextArea.select()
    document.execCommand('copy')
    newTextArea.remove()
  }

  return (
    <div>
      <div className='Password'>
      <h1>{password}</h1>
      <button onClick={copyToClipboard} className='copyBtn'>Copy</button>
      </div>
      <div className='form'>
            <label>Password length</label>
            <input
              Value={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type='number'
              max='20'
              min='10'
            />
          </div>

          <div className='form'>
            <label>Include Uppercase Letters</label>
            <input
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type='checkbox'
            />
          </div>

          <div className='form'>
            <label>Include Lowercase Letters</label>
            <input
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              type='checkbox'
            />
          </div>

          <div className='form'>
            <label>Include Numbers</label>
            <input
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type='checkbox'
            />
          </div>

          <div className='form'>
            <label>Include Symbols</label>
            <input
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type='checkbox'
            />
          </div>
          <button onClick={GeneratePassword} className='generatorBtn'>
                Generate Password
          </button>
    </div>
  );
}

export default Password;
