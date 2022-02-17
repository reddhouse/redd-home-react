import { useRef, useReducer } from 'react'
import styled from 'styled-components'

function ShoppingList() {
  const inputRef = useRef()
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ]
      case "remove":
        // Keep every item except the one we want to remove
        return state.filter((_, index) => index != action.index)
      default:
        return state
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({
      type: "add",
      name: inputRef.current.value
    })
    inputRef.current.value = ""
  }

  function renderItems() {
    return items.map((item, index) => (
      <li key={item.id}>
        {item.name}{" "}
        <button onClick={() => dispatch({ type: "remove", index })}>X</button>
      </li>
    ))
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>Add item:</label>
        <input ref={inputRef} />
      </form>
      <ul>{renderItems()}</ul>
    </Container>
  )
}

export default ShoppingList

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
