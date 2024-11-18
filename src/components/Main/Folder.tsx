import styled from 'styled-components';

interface FolderProps {
  step: string;
  title: string;
  content: string;
  $isOdd: boolean;
}

const Folder: React.FC<FolderProps> = ({ step, title, content, $isOdd }) => {
  return (
    <FolderWrapper $isOdd={$isOdd}>
      <StepBox>{step}</StepBox>
      <TextBox>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </TextBox>
    </FolderWrapper>
  );
};

export default Folder;

const FolderWrapper = styled.div<{ $isOdd: boolean }>`
  display: flex;
  flex-direction: column;
  margin-top: ${({ $isOdd }) => ($isOdd ? '40px' : '0')};
`;

const StepBox = styled.div`
  width: 150px;
  height: 45px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  font-size: 23px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const TextBox = styled.div`
  width: 200px;
  height: 170px;
  background-color: ${({ theme }) => theme.color.BLUE200};
  border-radius: 10px;
  margin: -20px 0 0 20px;
  position: relative;
  z-index: -1;
  display: flex;
  flex-direction: column;
  gap: 9px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-weight: 500;
  font-size: 17px;
`;

const Content = styled.p`
  font-weight: 400;
  font-size: 15px;
`;
