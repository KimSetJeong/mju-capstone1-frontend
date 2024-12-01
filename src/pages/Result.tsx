import { styled } from 'styled-components';
import Folder from '../components/Result/Folder';
import GraphFolder from '../components/Result/GraphFolder';
import Expression from '../components/Result/Expression';
import { AxiosResult } from '../apis/AxiosResult';
import { useEffect, useState } from 'react';
import Loading from './Loading';

interface ResultData {
  title: string;
  createdAt: string;
  videoUrl: string;
  feedback: string;
  faceResult: string;
  graph: string;
}

const Result = () => {
  const [response, setResponse] = useState<ResultData | null>(null);

  const fetchResultData = async () => {
    try {
      const result = await AxiosResult();
      setResponse(result);
    } catch (error) {
      console.error('Error fetching result data:', error);
    }
  };

  useEffect(() => {
    fetchResultData();
  }, []);

  if (!response) {
    return <Loading />;
  }

  const { title, createdAt, videoUrl, feedback, graph, faceResult } = response;
  const parsedFeedback = JSON.parse(feedback);
  const parsedGraph = JSON.parse(graph);
  const parsedFace = JSON.parse(faceResult);

  return (
    <Container>
      <TextBox>
        <StepText>STEP 04. 피드백 보고서 확인하기</StepText>
        <StepSmallText>
          모든 단계를 해내셨어요 ! 아래를 확인해보세요 :)
        </StepSmallText>
        <Title>{title}</Title>
        <StyledDate>
          {new Date(createdAt || '').toLocaleString('ko-KR')}
        </StyledDate>
      </TextBox>
      <VideoNExpressionWrapper>
        <VideoWrapper controls>
          <source src={videoUrl} />
          브라우저가 동영상을 지원하지 않습니다.
        </VideoWrapper>
        <Expression
          Positive={parsedFace.Positive}
          Neutral={parsedFace.Neutral}
          Negative={parsedFace.Negative}
        />
      </VideoNExpressionWrapper>
      <FolderArea>
        <SmallFolderWrapper>
          <Folder
            title="면접 영상 기반 피드백"
            content={parsedFeedback.interview_feedback}
          />
          <GraphFolder data={parsedGraph.top3_predictions} />
        </SmallFolderWrapper>
        <Folder
          title="자기소개서 기반 피드백"
          content={parsedFeedback.resume_feedback}
        />
      </FolderArea>
    </Container>
  );
};

export default Result;

const Container = styled.div`
  padding: 0 80px;
  margin: 140px 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  width: 1100px;
`;
const StepText = styled.p`
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 20px;
`;

const StepSmallText = styled.p`
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 10px 10px;
`;

const StyledDate = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
  color: #8a8a8a;
`;

const VideoNExpressionWrapper = styled.div`
  display: flex;
  gap: 170px;
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

const FolderArea = styled.div`
  margin-left: -30px;
`;
