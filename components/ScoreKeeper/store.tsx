import React from 'react'
import { Score } from './types'
import useLocalStorage from '../../utils/useLocalStorage'
type StoreType = {
    score: Score,
    incHenri: () => void,
    decHenri: () => void,
    incMeris: () => void,
    decMeris: () => void,
}

const initialValue = {
  score: {
    henriScore: 0,
    merisScore: 0
  },
  incHenri: () => {},
  decHenri: () => {},
  incMeris: () => {},
  decMeris: () => {}
}
export const Context = React.createContext<StoreType>(initialValue)
export const Provider = ({ children }: {children: React.ReactNode}) => {
  const [score, setScore] = useLocalStorage('myScoreKey', initialValue.score)
  const { incMeris, incHenri, decMeris, decHenri } = React.useMemo(() => ({
    incMeris: () =>
      setScore(({
        ...score,
        merisScore: score.merisScore + 1
      })),
    incHenri: () =>
      setScore(() => ({
        ...score,
        henriScore: score.henriScore + 1
      })),
    decMeris: () =>
      setScore(() => ({
        ...score,
        merisScore: score.merisScore - 1
      })),
    decHenri: () =>
      setScore(() => ({
        ...score,
        henriScore: score.henriScore - 1
      }))
  }), [score])
  return <Context.Provider value={{ score, ...{ incMeris, incHenri, decMeris, decHenri } }}>{children}</Context.Provider>
}
