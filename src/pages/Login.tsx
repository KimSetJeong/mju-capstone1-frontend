import { styled } from 'styled-components';
import { ReactComponent as Logo } from '../assets/images/BigLogo.svg';
import { ReactComponent as CircleM } from '../assets/images/Circle1.svg';
import { ReactComponent as CircleL } from '../assets/images/Circle2.svg';
import { ReactComponent as CircleS } from '../assets/images/Circle3.svg';
import { ReactComponent as Kakao } from '../assets/images/Kakao.svg';

const Login = () => {
  return (
    <>
      <Container>
        <ContentContainer>
          <StyledLogo />
          <Title>
            {
              <>
                ViewIt 과 함께
                <br />
                면접의 모든 각도를 살펴보다.
              </>
            }
          </Title>
          <LoginBtn>
            <KakaoLogo />
            카카오 로그인
          </LoginBtn>
        </ContentContainer>
        <StyledCircleS />
        <StyledCircleM />
        <StyledCircleL />
      </Container>
    </>
  );
};

export default Login;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const StyledCircleS = styled(CircleS)`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: -1;
`;

const StyledCircleM = styled(CircleM)`
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
`;

const StyledCircleL = styled(CircleL)`
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLogo = styled(Logo)`
  margin-bottom: 31px;
`;

const Title = styled.p`
  font-size: 50px;
  font-weight: 800;
  display: flex;
  text-align: center;
  margin-bottom: 46px;
`;

const LoginBtn = styled.button`
  width: 300px;
  height: 45px;
  background-color: #ffe812;
  border: none;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.BLACK};
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 2px 2px 0 rgba(00, 00, 00, 0.1);
`;

const KakaoLogo = styled(Kakao)`
  width: 20px;
  height: auto;
`;
