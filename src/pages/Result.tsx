import { styled } from 'styled-components';
import Folder from '../components/Result/Folder';
import GraphFolder from '../components/Result/GraphFolder';
import Expression from '../components/Result/Expression';

const Result = () => {
  return (
    <>
      <Container>
        <StepText>STEP 04. 피드백 보고서 확인하기</StepText>
        <StepSmallText>
          모든 단계를 해내셨어요 ! 아래를 확인해보세요 :)
        </StepSmallText>
        <Title>삼성 합격 기원</Title>
        <Date>2024.09.01 13:50</Date>
        <VideoNExpressionWrapper>
          <VideoWrapper controls>
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            브라우저가 동영상을 지원하지 않습니다.
          </VideoWrapper>
          <Expression></Expression>
        </VideoNExpressionWrapper>

        <SmallFolderWrapper>
          <Folder
            title="면접 영상 기반 피드백"
            content="답변의 논리성
          답변을 전개하는 과정에서 논리적인 흐름이 잘 잡혀 있었습니다.
          다만, 추가적으로 "
          />
          <GraphFolder />
        </SmallFolderWrapper>
        <Folder
          title="자기소개서 기반 피드백"
          content="답변의 논리성
          답변을 전개하는 과정에서 논리적인 흐름이 잘 잡혀 있었습니다.
          다만, 추가적으로 "
        ></Folder>
      </Container>
    </>
  );
};

export default Result;

const Container = styled.div`
  padding: 0 80px;
  margin: 39px 0 70px;
  display: flex;
  flex-direction: column;
`;

const StepText = styled.p`
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 10px;
`;

const StepSmallText = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 18px;
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin-left: 10px;
`;

const Date = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
  color: #8a8a8a;
`;

const VideoNExpressionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const VideoWrapper = styled.video`
  width: 430px;
  height: auto;
  margin: 37px 0 57px 20px;
`;

const SmallFolderWrapper = styled.div`
  display: flex;
  gap: 52px;
  margin-bottom: 51px;
`;
