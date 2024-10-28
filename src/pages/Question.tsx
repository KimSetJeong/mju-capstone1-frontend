import { styled } from 'styled-components';

const Question = () => {
  return (
    <Wrapper>
      <Container>
        <Title>예상 질문을 확인하고, 면접 영상을 준비하기</Title>
        <Box>
          <QuestionText>
            저희 회사에 지원하신 동기에 대해 알려주세요.
          </QuestionText>
          <QuestionText>
            협업을 하며 어려움을 겪었던 경험과 극복 방안에 대해 이야기 해주세요.
          </QuestionText>
          <QuestionText>자기소개 해주세요.</QuestionText>
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
  height: 235px;
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
