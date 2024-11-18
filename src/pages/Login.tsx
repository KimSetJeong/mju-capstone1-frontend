import { useState, ChangeEvent, FormEvent } from 'react';
import { styled } from 'styled-components';
import { ReactComponent as Logo } from '../assets/images/BigLogo.svg';
import { ReactComponent as CircleM } from '../assets/images/Circle1.svg';
import { ReactComponent as CircleL } from '../assets/images/Circle2.svg';
import { ReactComponent as CircleS } from '../assets/images/Circle3.svg';
import { AxiosLogin, LoginFormValues } from '../apis/AxiosLogin';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState<LoginFormValues>({
    memberId: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError('');
    console.log(error);
    try {
      const response = await AxiosLogin(loginForm);
      if (response.status === 200) {
        alert(response.message);
        navigate('/');
      }
    } catch (error: unknown) {
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as {
          response: {
            data: {
              message: string;
              data: string;
            };
          };
        };
        setError(
          axiosError.response?.data?.message || '로그인에 실패했습니다.',
        );
        console.error('로그인 실패:', error);
        alert(axiosError.response?.data?.data);
      } else {
        setError('로그인에 실패했습니다.');
        console.error('로그인 실패:', error);
      }
    }
  };

  const handleJoin = () => {
    navigate('/signup');
  };
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
          <LoginArea>
            <InputWrapper>
              <Input
                placeholder="ID"
                name="memberId"
                value={loginForm.memberId}
                onChange={handleChange}
              />
              <Input
                placeholder="Password"
                name="password"
                type="password"
                value={loginForm.password}
                onChange={handleChange}
              />
            </InputWrapper>
            <BtnWrapper>
              <LoginBtn onClick={handleLogin}>Login</LoginBtn>
              <JoinBtn onClick={handleJoin}>Join</JoinBtn>
            </BtnWrapper>
          </LoginArea>
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

const LoginArea = styled.div`
  display: flex;
  gap: 40px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  width: 400px;
  height: 60px;
  border: 1px solid #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(00, 00, 00, 0.1);
  padding: 0 37px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 15px;
    font-weight: 800;
    color: #9c9ca1;
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LoginBtn = styled.button`
  width: 80px;
  height: 90px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  box-shadow: 0 4px 10px 0 rgba(00, 00, 00, 0.1);
  font-size: 15px;
  font-weight: 800;
  text-align: center;
`;

const JoinBtn = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  box-shadow: 0 4px 10px 0 rgba(00, 00, 00, 0.1);
  font-size: 15px;
  font-weight: 800;
  text-align: center;
`;
