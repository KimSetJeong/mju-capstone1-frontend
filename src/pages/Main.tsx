import { styled } from 'styled-components';
import Folder from '../components/Main/Folder';
import InputWithTitle from '../components/Main/InputWithTitle';

const Main = () => {
  const folderDatas = [
    {
      id: 0,
      step: 'STEP 01',
      title: '희망 직무 설정',
      content: '우측 버튼을 통해 설정',
    },
    {
      id: 1,
      step: 'STEP 02',
      title: '자소서 문항 작성',
      content: '최소 3개, 최대 5개 문항',
    },
    {
      id: 2,
      step: 'STEP 03',
      title: '면접 영상 제출',
      content: '최대 10분 이내',
    },
    {
      id: 3,
      step: 'STEP 04',
      title: '피드백 보고서 도출',
      content: '표정 및 답변에 대한 분석',
    },
  ];

  return (
    <MainContainer>
      <LeftSection>
        <LeftTitleBox>
          AI 면접 서비스 ViewIt 과 함께 면접의 모든 각도를 살펴보다.
        </LeftTitleBox>
        <FolderWrapper>
          {folderDatas.map((data) => (
            <Folder
              key={data.id}
              step={data.step}
              title={data.title}
              content={data.content}
              $isOdd={data.id % 2 === 1}
            />
          ))}
        </FolderWrapper>
      </LeftSection>

      <RightBackground>
        <InputWithTitle />
      </RightBackground>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const LeftSection = styled.div`
  width: 50%;
  padding: 20px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
`;

const LeftTitleBox = styled.div`
  width: 518px;
  height: 83px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 62px;
`;

const FolderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 518px;
`;

const RightBackground = styled.div`
  width: 50%;
  height: 100%;
  position: fixed;
  right: 0;
  background-color: ${({ theme }) => theme.color.BLUE100};
  z-index: 0;
`;
