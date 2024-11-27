import Spinner from '../assets/images/Loading/Spinner.gif';
import { styled } from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <SpinnerBox>
        <img src={Spinner} />
      </SpinnerBox>
      <Text>잠시만 기다려주세요 💨</Text>
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpinnerBox = styled.div`
  width: 200px;
  height: 200px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.color.BLUE700};
  font-size: 30px;
  font-weight: 700;
`;
