import { useState } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as FileIcon } from '../assets/images/FileIcon.svg';

interface FileInfo {
  name: string;
  size: string;
  type: string;
}

const Upload = () => {
  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState<FileInfo | null>(null);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const setFileInfo = (file: File) => {
    const { name, size: byteSize, type } = file;
    const size = (byteSize / (1024 * 1024)).toFixed(2) + 'mb';
    setUploadedInfo({ name, size, type });
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setActive(false);
    const file = event.dataTransfer.files[0];
    setFileInfo(file);
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileInfo(file);
    }
  };

  return (
    <Container>
      <StepGuideWrapper>
        <StepTitle>STEP 03. 면접 영상 제출하기</StepTitle>
        <StepText>면접영상을 아래에 첨부해주세요 !</StepText>
      </StepGuideWrapper>

      <InputLabel
        $isActive={isActive}
        onDragEnter={handleDragStart}
        onDragOver={handleDragOver}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
      >
        <Input type="file" onChange={handleUpload} />
        {uploadedInfo ? (
          <FileInfoWrapper>
            <FileInfoItem>
              <InfoKey>파일명:</InfoKey>
              <InfoValue>{uploadedInfo.name}</InfoValue>
            </FileInfoItem>
            <FileInfoItem>
              <InfoKey>크기:</InfoKey>
              <InfoValue>{uploadedInfo.size}</InfoValue>
            </FileInfoItem>
            <FileInfoItem>
              <InfoKey>타입:</InfoKey>
              <InfoValue>{uploadedInfo.type}</InfoValue>
            </FileInfoItem>
          </FileInfoWrapper>
        ) : (
          <>
            <FileIcon />
            <GuideTitle>영상 드래그하거나 클릭해서 업로드</GuideTitle>
            <GuideText>10분 이내 영상을 올려주세요!</GuideText>
          </>
        )}
      </InputLabel>
      <NextBtn>결과보기</NextBtn>
    </Container>
  );
};

export default Upload;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 46px 0;
`;

const StepGuideWrapper = styled.div`
  width: 621px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 64px;
`;

const StepTitle = styled.p`
  font-size: 25px;
  font-weight: 900;
`;

const StepText = styled.p`
  font-size: 17px;
  font-weight: 500;
`;

const InputLabel = styled.label<{ $isActive?: boolean }>`
  width: 621px;
  height: 360px;
  border: 1px dashed ${({ theme }) => theme.color.BLUE500};
  border-color: ${({ $isActive, theme }) =>
    $isActive ? theme.color.BLUE700 : theme.color.BLUE500};
  background-color: ${({ $isActive }) =>
    $isActive ? 'rgba(0, 0, 0, 0.05)' : 'transparent'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

const Input = styled.input`
  display: none;
`;

const GuideTitle = styled.p`
  font-weight: 800;
  font-size: 25px;
  color: ${({ theme }) => theme.color.BLACK};
  margin-top: 20px;
`;

const GuideText = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.BLACK};
  margin-top: 3px;
`;

const FileInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
`;

const FileInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InfoKey = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.BLACK};
  min-width: 60px;
`;

const InfoValue = styled.span`
  color: ${({ theme }) => theme.color.BLACK};
`;

const NextBtn = styled.button`
  width: 165px;
  height: 56px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  margin-top: 60px;
`;
