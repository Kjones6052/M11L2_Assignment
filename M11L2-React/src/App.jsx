// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import UserProfile from './components/classUserProfile';
import MoviesList from './components/MoviesList';


function App() {

  return (
    <div>
      <h1>Hello World!</h1>
      <UserProfile initialName="Alex" />
      <MoviesList />
    </div>
  )
}

export default App
