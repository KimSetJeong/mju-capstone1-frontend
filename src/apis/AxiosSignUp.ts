import Axios from './Axios';

type FormValues = {
  username: string;
  password: string;
};

export const AxiosSignUp = async (data: FormValues) => {
  try {
    await Axios.post('/api/auth/sign-up', {
      memberId: data.username,
      password: data.password,
    });
    console.log('회원가입 성공!');
  } catch (error) {
    console.error('회원가입 실패:', error);
  }
};
