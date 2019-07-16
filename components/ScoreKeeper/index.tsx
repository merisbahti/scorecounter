import React from 'react'
import * as S from './styles'
import { Context } from './store'
const Index = () => {
  const { score, incHenri, incMeris, decMeris, decHenri } = React.useContext(Context)
  return (
    <S.BaseContainer>
      <S.ScoreContainer>
        🍆 {score.merisScore} - {score.henriScore} 💅🏻
      </S.ScoreContainer>
      <S.ButtonContainer>
        <S.ScoreButton
          variant='green'
          onClick={incMeris}
        >
          +🍆
        </S.ScoreButton>
        <S.ScoreButton
          variant='green'
          onClick={incHenri}
        >
          +💅
        </S.ScoreButton>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.ScoreButton
          variant='red'
          onClick={decMeris}
        >
          - 🍆
        </S.ScoreButton>
        <S.ScoreButton
          variant='red'
          onClick={decHenri}
        >
          - 💅
        </S.ScoreButton>
      </S.ButtonContainer>
    </S.BaseContainer>
  )
}
export default Index
