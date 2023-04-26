import { useEffect, useMemo, useState, useRef } from 'react'

export default function App() {
  /////////////////////////////////////////////////////////////// MEMO
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [mode, setMode] = useState(false)

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const person = useMemo(() => {
    return { name, age }
  }, [name, age])

  useEffect(() => {
    console.log(person)
  }, [person])


  /////////////////////////////////////////////////////////////// REF

  const [nameRef, setNameRef] = useState()
  const [ageRef, setAgeRef] = useState(0)
  const [modeRef, setModeRef] = useState(false)

  const ref = useRef()
  const actualModeRef = useRef()

  const saveName = () => {
    const person = { name: ref.current.value, age: ageRef, mode: actualModeRef.current.checked }
    console.log(person)
  }


  return (
    <>
      <div>
        <h1>Memoization</h1>

        <input type="text" onChange={(e) => handleChangeName(e)} />
        <button onClick={() => setAge(current => current + 1)}>Add age</button>

        <input type="checkbox" name="mode" id="mode" onChange={() => setMode(current => !current)} />

      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1>Ref</h1>
        <input type="text" ref={ref} />
        <button onClick={() => setAgeRef(current => current - 1)}>-</button>
        {ageRef}
        <button onClick={() => setAgeRef(current => current + 1)}>+</button>

        <input type="checkbox" name="mode" ref={actualModeRef} id="mode" />
        <button onClick={() => saveName()}>Cadastrar Pessoa</button>
      </div>
    </>
  )
}