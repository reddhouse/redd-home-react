import React, { useState, Suspense } from 'react'
// import { unstable_createResource as createResource } from 'react-cache'
import styled from 'styled-components'
import fetchPokemon from './fetch-pokemon'

// When we need to fetch required data over the network, it might be helpful to
// store the data in a cache in the browser.
// Rather than using a simple js object for our cache, react-cache helps us not make
// unnecessary http calls, or create duplicate promises, etc.

// **********
// react-cache is unstable alpha code!
// NOTE: This is known to be broken as of React 16.8... Leaving here for reference.

// createResource takes a function that returns a promise.
// const myPokemon = createResource(fetchPokemon)

// function PokemonInfo({ pokemonName }) {
//   const pokemon = myPokemon.read(pokemonName)
//   // react-cache will throw a promise that will be caught by the nearest Suspense
//   // component, which will use the fallback, until the promise resolves, at which point
//   // Suspense re-renders its children, and our cache will have what it needs.
//   return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
// }

// **********
// The NON experimental, but slightly less safe way...
// react-cache is unstable alpha code!

const cache = {}

function PokemonInfo({pokemonName}) {
  const pokemon = cache[pokemonName]
  if (!pokemon) {
    const promise = fetchPokemon(pokemonName).then(
      p => (cache[pokemonName] = p),
    )
    throw promise
  }
  return <pre>{JSON.stringify(pokemon || 'Unknown', null, 2)}</pre>
}
// **********

function Pokemon() {
  const [pokemonName, setPokemonName] = useState(null)
  function handleSubmit(e) {
    e.preventDefault()
    setPokemonName(e.target.elements.pokemonName.value)
  }
  return (
    <Container>
      <div>Try searching for Jigglypuff, Bellsprout, Weedle, Tentacool, or Pikachu, etc.</div>
      <form onSubmit={handleSubmit}>
        <label>Pokemon Name</label>
        <input name="pokemonName" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {pokemonName ? (
          <Suspense fallback={<div>loading...</div>}>
            <PokemonInfo pokemonName={pokemonName} />
          </Suspense>
        ) : null}
      </div>
    </Container>
  )
}

export default Pokemon

/***************************** Styled Components *****************************/

const Container = styled.div`
  margin: 10px;
`
