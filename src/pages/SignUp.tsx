import { styled } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { AxiosSignUp, AxiosIdExists } from '../apis/AxiosSignUp';

type FormValues = {
  username: string;
  password: string;
  confirmPassword: string;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    trigger,
  } = useForm<FormValues>({
    mode: 'onChange',
  });

  useEffect(() => {
    trigger();
  }, [trigger]);

  const onIdExist = async () => {
    try {
      await AxiosIdExists({ username: watch('username') });
      trigger();
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async (data: FormValues) => {
    try {
      await AxiosSignUp(data);
    } catch (error) {
      console.error('회원가입 실패:', error);
    }
  };

  const password = watch('password');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Title>회원가입</Title>
        <div>
          <IdWrapper>
            <IdInput
              placeholder="ID"
              type="text"
              {...register('username', {
                required: '알파벳과 숫자만을 이용하여 3 ~ 12자',
                minLength: {
                  value: 3,
                  message: '아이디는 3자 이상이어야 합니다.',
                },
                maxLength: {
                  value: 12,
                  message: '아이디는 12자 이하여야 합니다.',
                },
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: '아이디는 알파벳과 숫자만 포함할 수 있습니다.',
                },
              })}
            />
            <IdBtn onClick={onIdExist}>Check</IdBtn>
          </IdWrapper>
          <InputGuide>{errors.username && errors.username.message}</InputGuide>
        </div>
        <div>
          <PWInput
            placeholder="Password"
            type="password"
            {...register('password', {
              required: '알파벳과 숫자만을 이용하여 6 ~ 14자',
              minLength: {
                value: 6,
                message: '비밀번호는 6자 이상이어야 합니다.',
              },
              maxLength: {
                value: 14,
                message: '비밀번호는 14자 이하여야 합니다.',
              },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,14}$/,
                message: '비밀번호는 영문과 숫자가 모두 포함되어야 합니다.',
              },
            })}
          />
          {errors.password && (
            <InputGuide>{errors.password.message}</InputGuide>
          )}
        </div>
        <div>
          <PWInput
            placeholder="Confirm Password"
            type="password"
            {...register('confirmPassword', {
              required: '위와 동일하게 비밀번호를 한 번 더 입력해주세요 !',
              validate: (value) =>
                value === password || '비밀번호가 일치하지 않습니다.',
            })}
          />
          {errors.confirmPassword && (
            <InputGuide>{errors.confirmPassword.message}</InputGuide>
          )}
        </div>
        <OKBtn type="submit">OK</OKBtn>
      </Container>
    </form>
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
