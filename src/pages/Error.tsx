import { ReactComponent as Light } from '../assets/images/Error/BlightCircle.svg';
import { ReactComponent as Dark } from '../assets/images/Error/DarkCircle.svg';
import { styled } from 'styled-components';

const Error = () => {
  return (
    <Container>
      <TextWrapper>
        <Title>ERROR</Title>
        <SubTitle>페이지를 찾을 수 없습니다.</SubTitle>
      </TextWrapper>
      <LightCircle />
      <DarkCircle />
    </Container>
  );
};

export default Error;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100vh;
`;

const LightCircle = styled(Light)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const DarkCircle = styled(Dark)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
`;

const Title = styled.p`
  font-weight: 800;
  font-size: 120px;
  color: ${({ theme }) => theme.color.BLUE700};
`;

const SubTitle = styled.p`
  font-weight: 800;
  font-size: 50px;
  color: ${({ theme }) => theme.color.BLUE700};
`;
