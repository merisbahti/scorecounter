import React from 'react'
import useLocalStorage from '../utils/useLocalStorage'
import ScoreKeeper from '../components/ScoreKeeper'
import { Provider } from '../components/ScoreKeeper/store'
const Index = () => (
  <Provider>
    <ScoreKeeper />
  </Provider>
)
export default Index
