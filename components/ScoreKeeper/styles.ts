import styled from 'styled-components'

type ScoreButtonProps = {
  variant?: 'green' | 'red'
}
export const ScoreButton = styled.button<ScoreButtonProps>(props => ({
  width: '100%',
  height: 40,
  backgroundColor: props.variant === 'green' ? 'lightgreen' : (
    props.variant === 'red' ? 'papayawhip': undefined
  )
}))

export const BaseContainer = styled.div({
  fontFamily: 'Helvetica Neue',
  fontSize: 48,
  width: 280,
  display: 'flex',
  flexDirection: 'column'
})
export const ButtonContainer = styled.div({
  display: 'flex',
  flexDirection: 'row'
})
export const ScoreContainer = styled.div({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  flexDirection: 'row'
})
