import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';
import { QuestionsAtom } from '../atoms/Questions';

const Question = () => {
  const questions = useRecoilValue(QuestionsAtom);
  return (
    <Wrapper>
      <Container>
        <Title>예상 질문을 확인하고, 면접 영상을 준비하기</Title>
        <Box>
          {questions.map((question, index) => (
            <QuestionText key={index}>{question}</QuestionText>
          ))}
        </Box>
        <PrepareText>
          이제 위 예상 질문을 바탕으로 10분 이내의 면접 영상을 준비해주세요!
        </PrepareText>
        <BtnWrapper>
          <NextBtn>다음</NextBtn>
        </BtnWrapper>
      </Container>
    </Wrapper>
  );
};

export default Question;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const Container = styled.div`
  width: 70%;
  margin-top: 80px;
`;

const Title = styled.p`
  width: 100%;
  font-weight: 900;
  font-size: 25px;
  margin-bottom: 62px;
`;

const Box = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${({ theme }) => theme.color.BLUE100};
  border-radius: 20px;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 84px;
`;

const QuestionText = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
`;

const PrepareText = styled.p`
  font-weight: 500;
  font-size: 23px;
  display: flex;
  justify-content: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 37px;
`;

const NextBtn = styled.button`
  width: 165px;
  height: 56px;
  font-weight: 700;
  font-size: 25px;
  color: ${({ theme }) => theme.color.WHITE};
  background-color: ${({ theme }) => theme.color.BLUE700};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
