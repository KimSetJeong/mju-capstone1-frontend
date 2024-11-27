import { styled } from 'styled-components';
import { AxiosRecord } from '../apis/AxiosMypage';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../components/Resume/Input';
import Expression from '../components/Result/Expression';
import Loading from './Loading';
import Folder from '../components/Result/Folder';
import GraphFolder from '../components/Result/GraphFolder';

interface ResumeItem {
  question: string;
  answer: string;
}

interface ResponseData {
  title: string;
  createdAt: string;
  feedback: string;
  resume: ResumeItem[];
  expectedQuestion: string[];
  videoUrl: string;
  faceResult: string;
  graph: string;
}

const Record = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState<ResponseData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  const fetchResultData = async (recordId: number) => {
    try {
      setLoading(true);
      const result = await AxiosRecord(recordId);
      setResponse(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching result data:', error);
    }
  };

  useEffect(() => {
    if (id) {
      const recordId = parseInt(id, 10);
      fetchResultData(recordId);
    }
  }, [id]);

  const {
    title,
    createdAt,
    feedback,
    resume,
    expectedQuestion,
    videoUrl,
    faceResult,
    graph,
  } = response || {};

  const parsedFeedback = feedback ? JSON.parse(feedback) : null;
  const parsedFace = faceResult ? JSON.parse(faceResult) : null;
  const parsedGraph = graph ? JSON.parse(graph) : null;

  const handleGoMypage = () => {
    navigate('/mypage');
  };
  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          {title && <Title>{title}</Title>}
          {createdAt && (
            <StyledDate>
              {new Date(createdAt).toLocaleString('ko-KR')}
            </StyledDate>
          )}
          <Contour>자기소개서</Contour>
          <InputWrapper>
            {resume &&
              resume.map((data, index) => (
                <Input
                  key={index}
                  index={index}
                  title={data.question}
                  content={data.answer}
                  readOnly={true}
                />
              ))}
          </InputWrapper>
          <Contour>예상질문</Contour>
          <Box>
            {expectedQuestion &&
              expectedQuestion.map((data, index) => (
                <QuestionText key={index}>{data}</QuestionText>
              ))}
          </Box>
          <Contour>최종 결과</Contour>
          <VideoNExpressionWrapper>
            <VideoWrapper controls>
              <source src={videoUrl} />
              브라우저가 동영상을 지원하지 않습니다.
            </VideoWrapper>
            {parsedFace && (
              <Expression
                Positive={parsedFace.Positive}
                Neutral={parsedFace.Neutral}
                Negative={parsedFace.Negative}
              />
            )}
          </VideoNExpressionWrapper>

          <SmallFolderWrapper>
            <Folder
              title="면접 영상 기반 피드백"
              content={parsedFeedback?.interview_feedback}
            />
            {parsedGraph && <GraphFolder data={parsedGraph.top3_predictions} />}
          </SmallFolderWrapper>
          <Folder
            title="자기소개서 기반 피드백"
            content={parsedFeedback?.resume_feedback}
          />
          <ButtonWrapper>
            <Button onClick={handleGoMypage}>확인</Button>
          </ButtonWrapper>
        </>
      )}
    </Container>
  );
};

export default Record;

const Container = styled.div`
  padding: 0 80px;
  margin: 140px 0 70px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin-left: 10px;
`;

const StyledDate = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
  color: #8a8a8a;
  margin-top: 10px;
`;

const Contour = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin: 20px 10px 0;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
  margin: 15px;
`;

const Box = styled.div`
  width: 90%;
  height: 300px;
  background-color: ${({ theme }) => theme.color.BLUE100};
  border-radius: 20px;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.1);
  margin: 20px 0 84px;
`;

const QuestionText = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 130%;
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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 165px;
  height: 56px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  font-size: 25px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
