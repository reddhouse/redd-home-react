import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

function fetchCharacters(search) {
  const apiKey = '6c565ddb0f8d3e623ff3385131e11d9e'
  return fetch(
    `https://gateway.marvel.com/v1/public/comics?apikey=${apiKey}&titleStartsWith=${search}`,
    { method: 'GET' }
  ).then(response => response.json())
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  // The ref object is a generic container whose current property is mutable and
  // can hold any value, similar to an instance property on a class.
  // Use a ref to store the setTimeout ID so that we can cancel it on effect cleanup.
  const handler = useRef()

  useEffect(
    () => {
      // Update debounced value after delay.
      handler.current = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      // React runs effects for every render, and cleans up effects from the previous
      // render before running effects the next time (or unmounting), assuming the
      // effect returns a "cleanup function", as we do in this case.

      // Here, we cancel the timeout if value or delay changes, which prevents the
      // debounced value from updating if value is changed within the delay period.
      // Effectively, the timeout gets cleared and restarted at each cleanup.
      return () => {
        clearTimeout(handler.current)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes.
  )

  return debouncedValue
}

function DebounceDemo() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  // Debounce searchTerm so that it only gives us latest value if searchTerm has
  // not been updated within last 500ms... make API call when user stops typing.
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  // API call
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true)
        fetchCharacters(debouncedSearchTerm).then(responseBody => {
          console.log('Response Body', responseBody)
          setIsSearching(false)
          setResults(responseBody.data.results)
        })
      } else {
        setResults([])
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes.
  )

  return (
    <Container>
      <input
        placeholder="Search Marvel Comics"
        onChange={e => setSearchTerm(e.target.value)}
      />

      {isSearching && <div>Searching ...</div>}

      {
        // No need for 'results &&' since we initialized the value with an empty array
        // results &&
        results.map(result => (
          <div key={result.id}>
            <h4>{result.title}</h4>
            <img
              src={`${result.thumbnail.path}/portrait_incredible.${result.thumbnail.extension}`}
            />
          </div>
        ))
      }
    </Container>
  )
}

export default DebounceDemo

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
