import useLocalStorage from '../../utils/useLocalStorage'
import * as S from './styles'
import { initalValue } from './types'
const Index = () => {
  const [score, setScore] = useLocalStorage('myScoreKey', initalValue)
  return (
    <S.BaseContainer>
      <S.ScoreContainer>
        🍆 {score.merisScore} - {score.henriScore} 💅🏻
      </S.ScoreContainer>
      <S.ButtonContainer>
        <S.ScoreButton
          onClick={() =>
            setScore({
              merisScore: score.merisScore + 1,
              henriScore: score.henriScore
            })
          }
        >
          +🍆
        </S.ScoreButton>
        <S.ScoreButton
          onClick={() =>
            setScore({
              merisScore: score.merisScore,
              henriScore: score.henriScore + 1
            })
          }
        >
          +💅
        </S.ScoreButton>
      </S.ButtonContainer>
      <S.ButtonContainer>
        <S.ScoreButton
          variant='green'
          onClick={() =>
            setScore({
              merisScore: score.merisScore - 1,
              henriScore: score.henriScore
            })
          }
        >
          - 🍆
        </S.ScoreButton>
        <S.ScoreButton
          variant='red'
          onClick={() =>
            setScore({
              merisScore: score.merisScore,
              henriScore: score.henriScore - 1
            })
          }
        >
          - 💅
        </S.ScoreButton>
      </S.ButtonContainer>

    </S.BaseContainer>
  )
}
export default Index
