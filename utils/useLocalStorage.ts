import { useState } from 'react'

const saveToLocalStorage = <T>(key: string, value: T) => {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
}

const getFromLocalStorage = (key: string) => {
  return typeof window !== 'undefined' && window.localStorage && window.localStorage.getItem(key)
}

export default function useLocalStorage<T> (
  key: string,
  initialValue: T
): [T, (arg0: T | ((state: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = getFromLocalStorage(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })
  const setValue = (value: T | ((arg0: T) => T)) => {
    try {
      if (value instanceof Function) {
        setStoredValue((storedValue) => {
          const evaluatedValue = value(storedValue)
          saveToLocalStorage(key, evaluatedValue)
          return evaluatedValue
        })
      } else {
        setStoredValue(value)
        saveToLocalStorage(key, value)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
