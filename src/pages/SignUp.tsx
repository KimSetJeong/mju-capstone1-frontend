import { styled } from 'styled-components';

const SignUp = () => {
  return (
    <Container>
      <Title>회원가입</Title>
      <div>
        <IdWrapper>
          <IdInput placeholder="ID" />
          <IdBtn>Check</IdBtn>
        </IdWrapper>
        <InputGuide>알파벳과 숫자만을 이용하여 3 ~ 12자</InputGuide>
      </div>
      <div>
        <PWInput placeholder="Password" type="password" />
        <InputGuide>알파벳과 숫자만을 이용하여 6 ~ 14자</InputGuide>
      </div>
      <div>
        <PWInput placeholder="Confirm Password" />
        <InputGuide>
          위와 동일하게 비밀번호를 한 번 더 입력해주세요 !
        </InputGuide>
      </div>
      <OKBtn>OK</OKBtn>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  margin-top: 90px;
`;

const Title = styled.p`
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 40px;
`;

const IdWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

const IdInput = styled.input`
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

const IdBtn = styled.button`
  width: 80px;
  height: 60px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  font-size: 15px;
  font-weight: 800;
  text-align: center;
  box-shadow: 0 4px 10px 0 rgba(00, 00, 00, 0.1);
`;

const PWInput = styled.input`
  width: 505px;
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

const InputGuide = styled.p`
  width: 505px;
  font-size: 12px;
  font-weight: 800;
  color: #9c9ca1;
  margin: 11px 0 0 22px;
`;

const OKBtn = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.BLUE700};
  color: ${({ theme }) => theme.color.WHITE};
  font-size: 15px;
  font-weight: 800;
  text-align: center;
  margin-top: 52px;
`;
