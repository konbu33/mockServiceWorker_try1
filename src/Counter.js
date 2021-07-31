import { useEffect } from 'react'

export const Counter = () => {

  useEffect( () => {
    const load = async () => {
      await fetch('http://localhost:3000/v1')
      await fetch('http://localhost:3000/login',{ method: 'post'})
      await fetch('http://localhost:3000/user')
    }
    load()
  }
  ,[])

  return (
    <>
      <div>Counter</div>
    </>
  )
}
