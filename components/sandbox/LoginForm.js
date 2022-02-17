import { useState } from 'react'
import styled from 'styled-components'

function LoginForm() {
  const [form, setValues] = useState({
    username: '',
    password: ''
  })

  const printValues = e => {
    e.preventDefault()
    console.log(form.username, form.password)
  }

  // Unlike the setState method found in class components, useState does not automatically
  // merge update objects. You can replicate this behavior by combining the function
  // updater form with object spread syntax:

  // setState(prevState => {
  //   return {...prevState, ...updatedValues}
  // })

  // Another option is useReducer, which is more suited for managing state objects that
  // contain multiple sub-values.

  const updateField = e => {
    setValues({
      ...form,
      // Name prop used so we can avoid writing a handler for each field.
      [e.target.name]: e.target.value
    })
  }

  return (
    <Container>
      <form onSubmit={printValues}>
        <label>Username:</label>
        <input
          value={form.username}
          name="username"
          onChange={updateField}
        />

        <label>Password:</label>
        <input
          value={form.password}
          name="password"
          type="password"
          onChange={updateField}
        />

        <button>Submit</button>
      </form>
    </Container>
  )
}

export default LoginForm

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
